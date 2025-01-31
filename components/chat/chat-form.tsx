import { Button } from "@/components/ui/button";
import { IconArrowElbow, IconStop } from "@/components/ui/icons";
import { type UseChatHelpers } from "ai/react";
import * as React from "react";
import Textarea from "react-textarea-autosize";

export function PromptForm({
  input,
  isLoading,
  stop,
  handleInputChange,
  handleSubmit,
}: Pick<
  UseChatHelpers,
  "input" | "isLoading" | "stop" | "handleInputChange" | "handleSubmit"
>) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative flex rounded-md border-2 border-dashed bg-background">
        <Textarea
          tabIndex={0}
          rows={1}
          maxRows={4}
          value={input}
          onChange={handleInputChange}
          placeholder="Send a message..."
          spellCheck={false}
          className="w-full resize-none bg-transparent p-3 pr-11 focus-within:outline-none"
        />
        <div className="absolute right-2 top-2">
          {isLoading ? (
            <Button size="icon" onClick={() => stop()} className="size-8">
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
