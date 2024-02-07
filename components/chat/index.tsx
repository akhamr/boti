"use client";

import { useChat, type Message } from "ai/react";

import { cn } from "@/lib/utils";
import { ChatPanel } from "@/components/chat/chat-panel";
import { EmptyScreen } from "@/components/chat/empty-screen";
import { usePathname, useRouter } from "next/navigation";

interface ChatProps extends React.ComponentProps<"div"> {
    initialMessages?: Message[];
    id?: string;
}

export default function Chat({ id, initialMessages, className }: ChatProps) {
    const router = useRouter();
    const path = usePathname();
    const { messages, append, reload, stop, isLoading, input, setInput } =
        useChat({
            initialMessages,
            id,
            onFinish() {
                if (!path.includes("chat")) {
                    router.push(`/chat/${id}`, { scroll: false });
                    router.refresh();
                }
            },
        });
    return (
        <>
            <div className={cn("pb-[200px] pt-4 md:pt-10", className)}>
                {messages.length ? (
                    <p>Iki chat!</p>
                ) : (
                    <EmptyScreen setInput={setInput} />
                )}
            </div>
            <ChatPanel
                id={id}
                isLoading={isLoading}
                stop={stop}
                append={append}
                reload={reload}
                messages={messages}
                input={input}
                setInput={setInput}
            />
        </>
    );
}
