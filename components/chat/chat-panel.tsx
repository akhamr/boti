import * as React from "react";
import { type UseChatHelpers } from "ai/react";

import { Button } from "@/components/ui/button";
import { PromptForm } from "@/components/chat/chat-form";
import { IconRefresh, IconStop } from "@/components/ui/icons";
import { FooterText } from "@/components/footer";

export interface ChatPanelProps
    extends Pick<
        UseChatHelpers,
        | "append"
        | "isLoading"
        | "reload"
        | "messages"
        | "stop"
        | "input"
        | "setInput"
    > {
    id?: string;
}

export function ChatPanel({
    id,
    isLoading,
    stop,
    append,
    reload,
    input,
    setInput,
    messages,
}: ChatPanelProps) {
    return (
        <div className="fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-transparent from-0% to-muted to-80% duration-300 ease-in-out animate-in peer-[[data-state=open]]:group-[]:md:pl-[calc(250px_+_0.5rem)] dark:to-background">
            <div className="mx-auto max-w-2xl px-4">
                <div className="mb-2 flex justify-center">
                    {!isLoading && messages?.length >= 2 && (
                        <Button
                            variant="outline"
                            className="bg-background/80"
                            onClick={() => reload()}
                        >
                            <IconRefresh className="mr-2" />
                            Regenerate response
                        </Button>
                    )}
                </div>
                <div className="mb-2 space-y-3 rounded-xl border-2 border-dashed bg-background p-4">
                    <PromptForm
                        onSubmit={async (value) => {
                            await append({
                                id,
                                content: value,
                                role: "user",
                            });
                        }}
                        input={input}
                        setInput={setInput}
                        isLoading={isLoading}
                        stop={stop}
                    />
                    <FooterText className="hidden sm:block" />
                </div>
            </div>
        </div>
    );
}
