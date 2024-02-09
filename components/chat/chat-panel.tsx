import * as React from "react";
import { type UseChatHelpers } from "ai/react";

import { Button } from "@/components/ui/button";
import { PromptForm } from "@/components/chat/chat-form";
import { IconRefresh, IconStop } from "@/components/ui/icons";
import { FooterText } from "../footer";

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
    title?: string;
}

export function ChatPanel({
    id,
    title,
    isLoading,
    stop,
    append,
    reload,
    input,
    setInput,
    messages,
}: ChatPanelProps) {
    return (
        <div className="fixed inset-x-0 bottom-2 w-full duration-300 ease-in-out animate-in peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
            <div className="mx-auto max-w-2xl px-4">
                <div className="flex h-12 items-center justify-center">
                    {isLoading ? (
                        <Button
                            variant="outline"
                            onClick={() => stop()}
                            className="bg-background"
                        >
                            <IconStop className="mr-2" />
                            Stop generating
                        </Button>
                    ) : (
                        messages?.length >= 2 && (
                            <div className="flex space-x-2">
                                <Button
                                    variant="outline"
                                    onClick={() => reload()}
                                >
                                    <IconRefresh className="mr-2" />
                                    Regenerate response
                                </Button>
                            </div>
                        )
                    )}
                </div>
                <div className="space-y-3 rounded-xl border-2 border-dashed bg-background px-4 py-4">
                    <PromptForm
                        onSubmit={async (value: any) => {
                            await append({
                                id,
                                content: value,
                                role: "user",
                            });
                        }}
                        input={input}
                        setInput={setInput}
                        isLoading={isLoading}
                    />
                    <FooterText className="hidden sm:block" />
                </div>
            </div>
        </div>
    );
}
