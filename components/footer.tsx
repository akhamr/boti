import React from "react";

import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/external-link";

export function FooterText({ className, ...props }: React.ComponentProps<"p">) {
    return (
        <p
            className={cn(
                "px-2 text-center text-xs leading-normal text-muted-foreground",
                className
            )}
            {...props}
        >
            <span className="font-doodle">Bot-I.</span> (read: boti) is an
            AI-based chatbot built by{" "}
            <ExternalLink href="https://akhamr.me">Akha</ExternalLink>.
        </p>
    );
}
