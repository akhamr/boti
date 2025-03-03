import { auth } from "@/lib/auth";
import { nanoid } from "@/lib/utils";
import { google } from "@ai-sdk/google";
import { kv } from "@vercel/kv";
import { createDataStreamResponse, smoothStream, streamText } from "ai";

export async function POST(req: Request) {
  const json = await req.json();
  const userId = (await auth())?.user.id;

  if (!userId) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const { messages } = json;

  return createDataStreamResponse({
    execute: (dataStream) => {
      const res = streamText({
        model: google("gemini-1.5-flash-latest"),
        temperature: 0.4,
        messages,
        experimental_transform: smoothStream({ chunking: "word" }),
        onFinish: async (completion) => {
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
                content: completion.text,
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
      });

      res.mergeIntoDataStream(dataStream);
    },
  });
}
