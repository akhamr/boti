"use client";

import { useChat } from "ai/react";

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <>
            {messages.length > 0
                ? messages.map((m) => (
                      <div key={m.id} className="whitespace-pre-wrap">
                          {m.role === "user" ? "User: " : "AI: "}
                          {m.content}
                      </div>
                  ))
                : null}

            <form onSubmit={handleSubmit}>
                <input
                    className="fixed bottom-0 mb-8 w-full max-w-md rounded border border-gray-300 p-2 shadow-xl"
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                />
            </form>
        </>
    );
}
