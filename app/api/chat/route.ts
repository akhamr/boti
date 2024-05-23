import { kv } from "@vercel/kv";
import { google } from "@ai-sdk/google";
import { StreamingTextResponse, streamText } from "ai";
import { auth } from "@/lib/auth";
import { nanoid } from "@/lib/utils";

export async function POST(req: Request) {
    const json = await req.json();
    const userId = (await auth())?.user.id;

    if (!userId) {
        return new Response("Unauthorized", {
            status: 401,
        });
    }

    const { messages } = json;

    const res = await streamText({
        model: google("models/gemini-1.5-flash-latest"),
        temperature: 0.7,
        maxTokens: 256,
        messages,
    });

    return new StreamingTextResponse(
        res.toAIStream({
            async onFinal(completion) {
                const title = json.messages[0].content.substring(0, 100);
                const id = json.id ?? nanoid();
                const createdAt = Date.now();
                const path = `/chat/${id}`;
                const payload = {
                    id,
                    title,
                    userId,
                    createdAt,
                    path,
                    messages: [
                        ...messages,
                        {
                            content: completion,
                            role: "assistant",
                        },
                    ],
                };
                await kv.hmset(`chat:${id}`, payload);
                await kv.zadd(`user:chat:${userId}`, {
                    score: createdAt,
                    member: `chat:${id}`,
                });
            },
        })
    );
}
