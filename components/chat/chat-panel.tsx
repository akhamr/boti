import { Button } from "@/components/ui/button";
import { PromptForm } from "@/components/chat/chat-form";
import { IconRefresh, IconStop } from "@/components/ui/icons";
import { FooterText } from "@/components/layout/footer";
import { type UseChatHelpers } from "ai/react";
import * as React from "react";

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | "input"
    | "messages"
    | "isLoading"
    | "stop"
    | "reload"
    | "handleInputChange"
    | "handleSubmit"
  > {
  id?: string;
}

export function ChatPanel({
  input,
  messages,
  isLoading,
  stop,
  reload,
  handleInputChange,
  handleSubmit,
}: ChatPanelProps) {
  return (
    <div className="animate-in from-background fixed inset-x-0 bottom-0 bg-gradient-to-t duration-300 ease-in-out peer-[[data-state=open]]:md:pl-[calc(250px_+_1rem)]">
      <div className="mx-auto mb-2 max-w-2xl space-y-2">
        <div className="flex justify-center">
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
        <div className="bg-background space-y-4 rounded-xl border-2 border-dashed p-4">
          <PromptForm
            input={input}
            isLoading={isLoading}
            stop={stop}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
          <FooterText className="hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
