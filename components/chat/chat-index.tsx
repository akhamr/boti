import { UseChatHelpers } from "ai/react";

import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";
import { ExternalLink } from "@/components/external-link";

const exampleMessages = [
    {
        heading: "Explain technical concepts",
        message: `Explain organic chemistry to 2nd grader`,
    },
    {
        heading: "Summarize a books",
        message: "Summarize romeo and juliet in Shakespeare syle",
    },
    {
        heading: "Make a code",
        message: `Make a code of fibonacci sequence in Python`,
    },
];

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, "setInput">) {
    return (
        <div className="mx-auto max-w-2xl px-4">
            <div className="rounded-lg border-2 border-dashed bg-background p-8">
                <h1 className="mb-2 text-lg font-semibold">
                    Welcome to Next.js AI Chatbot!
                </h1>
                <p className="mb-2 text-muted-foreground">
                    This is an open source AI chatbot app template built with{" "}
                    <ExternalLink href="https://nextjs.org">
                        Next.js
                    </ExternalLink>
                    {" and "}
                    <ExternalLink href="https://vercel.com/storage/kv">
                        Vercel KV
                    </ExternalLink>
                    .
                </p>
                <p className="text-muted-foreground">
                    You can start a conversation here or try the following
                    examples:
                </p>
                <div className="mt-4 flex flex-col items-start space-y-2">
                    {exampleMessages.map((message, index) => (
                        <Button
                            key={index}
                            variant="link"
                            className="h-auto p-0 text-base"
                            onClick={() => setInput(message.message)}
                        >
                            <IconArrowRight className="mr-2 text-muted-foreground" />
                            {message.heading}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}
