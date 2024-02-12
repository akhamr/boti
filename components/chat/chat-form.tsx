import * as React from "react";
import Textarea from "react-textarea-autosize";
import { UseChatHelpers } from "ai/react";
import { useEnterSubmit } from "@/lib/hooks/use-enter-submit";

import { Button } from "@/components/ui/button";
import { IconArrowElbow, IconStop } from "@/components/ui/icons";

export interface PromptProps
    extends Pick<UseChatHelpers, "stop" | "isLoading" | "input" | "setInput"> {
    onSubmit: (value: string) => void;
}

export function PromptForm({
    stop,
    onSubmit,
    input,
    setInput,
    isLoading,
}: PromptProps) {
    const { formRef, onKeyDown } = useEnterSubmit();
    const inputRef = React.useRef<HTMLTextAreaElement>(null);
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                if (!input?.trim()) {
                    return;
                }
                setInput("");
                await onSubmit(input);
            }}
            ref={formRef}
        >
            <div className="relative flex rounded-md border-2 border-dashed bg-background">
                <Textarea
                    ref={inputRef}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    rows={1}
                    maxRows={4}
                    value={input}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setInput(e.target.value)
                    }
                    placeholder="Send a message."
                    spellCheck={false}
                    className="w-full resize-none bg-transparent p-3 pr-11 focus-within:outline-none"
                />
                <div className="absolute right-2 top-2">
                    {isLoading ? (
                        <Button
                            size="icon"
                            onClick={() => stop()}
                            className="size-8"
                        >
                            <IconStop />
                            <span className="sr-only">Stop generating</span>
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            size="icon"
                            disabled={input === ""}
                            className="size-8"
                        >
                            <IconArrowElbow />
                            <span className="sr-only">Send message</span>
                        </Button>
                    )}
                </div>
            </div>
        </form>
    );
}
