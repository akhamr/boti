import { PromptForm } from "@/components/chat/chat-form";
import { FooterText } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { IconRefresh, IconStop } from "@/components/ui/icons";
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
    <div className="fixed inset-x-0 bottom-0 bg-gradient-to-t from-background duration-300 ease-in-out animate-in peer-[[data-state=open]]:md:pl-[calc(250px_+_1rem)]">
      <div className="mx-auto mb-2 max-w-2xl space-y-2 px-6 lg:px-0">
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
        <div className="space-y-4 rounded-xl border-2 border-dashed bg-background p-4">
          <PromptForm
            input={input}
            isLoading={isLoading}
            stop={stop}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
          <FooterText className="hidden md:block" />
        </div>
      </div>
    </div>
  );
}
