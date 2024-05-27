import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/external-link";
import React from "react";

export function FooterText({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-muted-foreground px-2 text-center text-xs leading-normal",
        className,
      )}
      {...props}
    >
      <span className="font-doodle">Bot-I.</span> (read: boti) is an AI-based
      chatbot built by{" "}
      <ExternalLink href="https://akhamr.me">Akha</ExternalLink>.
    </p>
  );
}
