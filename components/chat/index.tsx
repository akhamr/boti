"use client";

import { ChatList } from "@/components/chat/chat-list";
import { ChatPanel } from "@/components/chat/chat-panel";
import { EmptyScreen } from "@/components/chat/chat-index";
import { useChat, type Message } from "ai/react";
import { usePathname, useRouter } from "next/navigation";

interface ChatProps extends React.ComponentProps<"div"> {
  initialMessages?: Message[];
  id?: string;
}

export default function Chat({ id, initialMessages }: ChatProps) {
  const router = useRouter();
  const path = usePathname();
  const {
    input,
    messages,
    isLoading,
    reload,
    stop,
    setInput,
    handleInputChange,
    handleSubmit,
  } = useChat({
    initialMessages,
    id,
    body: {
      id,
    },
    onFinish() {
      if (!path.includes("chat/")) {
        router.push(`/chat/${id}`, { scroll: false });
        router.refresh();
      }
    },
  });
  return (
    <>
      <div className="animate-in w-full select-text overflow-auto pb-52 pt-6 duration-300 ease-in-out md:pb-64 md:pt-10 peer-[[data-state=open]]:md:pl-[calc(250px_+_1rem)]">
        {messages.length ? (
          <ChatList messages={messages} />
        ) : (
          <EmptyScreen setInput={setInput} />
        )}
      </div>
      <ChatPanel
        input={input}
        messages={messages}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        stop={stop}
        reload={reload}
      />
    </>
  );
}
