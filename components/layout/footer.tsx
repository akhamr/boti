import { ExternalLink } from "@/components/external-link";
import { cn } from "@/lib/utils";
import React from "react";

export function FooterText({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "px-2 text-center text-xs leading-normal text-muted-foreground",
        className
      )}
      {...props}
    >
      <span className="font-doodle">Bot-I.</span> (read: boti) is an AI-based
      chatbot built by{" "}
      <ExternalLink href="https://akhamr.dev">Akha</ExternalLink>.
    </p>
  );
}
