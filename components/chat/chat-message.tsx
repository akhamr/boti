import React from "react";
import { Message } from "ai";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/ui/codeblock";
import { MemoizedReactMarkdown } from "@/components/markdown";
import { IconOpenAI, IconUser } from "@/components/ui/icons";
import { ChatMessageActions } from "@/components/chat/chat-message-actions";

export interface ChatMessageProps {
    message: Message;
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
    return (
        <div
            className={cn("group relative flex items-start md:-ml-12")}
            {...props}
        >
            <div
                className={cn(
                    "flex size-8 select-none items-center justify-center rounded-md border shadow",
                    message.role === "user"
                        ? "bg-accent"
                        : "bg-primary text-primary-foreground"
                )}
            >
                {message.role === "user" ? (
                    <IconUser className="size-[18px]" />
                ) : (
                    <IconOpenAI />
                )}
            </div>
            <div className="ml-4 flex-1 space-y-2 overflow-hidden px-2">
                <MemoizedReactMarkdown
                    className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 md:max-w-screen-sm"
                    remarkPlugins={[remarkGfm, remarkMath]}
                    components={{
                        code({ node, className, children, ...props }) {
                            const childArray = React.Children.toArray(children);
                            const firstChild =
                                childArray[0] as React.ReactElement;
                            const firstChildAsString = React.isValidElement(
                                firstChild
                            )
                                ? (firstChild as React.ReactElement).props
                                      .children
                                : firstChild;

                            if (firstChildAsString === "▍") {
                                return (
                                    <span className="mt-1 animate-pulse cursor-default">
                                        ▍
                                    </span>
                                );
                            }

                            if (typeof firstChildAsString === "string") {
                                childArray[0] = firstChildAsString.replace(
                                    "`▍`",
                                    "▍"
                                );
                            }

                            const match = /language-(\w+)/.exec(
                                className || ""
                            );

                            if (
                                typeof firstChildAsString === "string" &&
                                !firstChildAsString.includes("\n")
                            ) {
                                return (
                                    <code className={className} {...props}>
                                        {childArray}
                                    </code>
                                );
                            }

                            return (
                                <CodeBlock
                                    key={Math.random()}
                                    language={(match && match[1]) || ""}
                                    value={String(childArray).replace(
                                        /\n$/,
                                        ""
                                    )}
                                    {...props}
                                />
                            );
                        },
                    }}
                >
                    {message.content}
                </MemoizedReactMarkdown>
                <ChatMessageActions message={message} />
            </div>
        </div>
    );
}
