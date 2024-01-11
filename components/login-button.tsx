"use client";

import { IconSpinner, IconGitHub } from "@/components/ui/icons";
import { Button, type ButtonProps } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

function LoginButton({ className, ...props }: ButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Button
            variant="outline"
            onClick={() => {
                setIsLoading(true);
                signIn("github");
            }}
            disabled={isLoading}
            className={cn(className)}
            {...props}
        >
            {isLoading ? (
                <IconSpinner className="mr-2 animate-spin" />
            ) : (
                <IconGitHub className="mr-2" />
            )}
            Login with GitHub
        </Button>
    );
}

function LogoutButton({ className, ...props }: ButtonProps) {
    return (
        <Button
            variant="outline"
            onClick={() => signOut()}
            className={cn(className)}
            {...props}
        >
            Log Out
        </Button>
    );
}

export { LoginButton, LogoutButton };
