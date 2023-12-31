"use client";

import { IconSpinner, IconGitHub } from "@/components/Icon";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";

function LoginButton() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <button
            className="flex items-center rounded-md border border-zinc-200 px-4 py-2 text-sm font-semibold shadow transition-colors hover:bg-zinc-100 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 hover:dark:bg-zinc-800"
            onClick={() => {
                setIsLoading(true);
                signIn("github");
            }}
            disabled={isLoading}
        >
            {isLoading ? (
                <IconSpinner className="mr-2 animate-spin" />
            ) : (
                <IconGitHub className="mr-2" />
            )}
            Login with GitHub
        </button>
    );
}

function LogoutButton() {
    return (
        <button
            className="flex items-center rounded-md border border-zinc-200 px-4 py-2 text-sm font-semibold shadow transition-colors hover:bg-zinc-100 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 hover:dark:bg-zinc-800"
            onClick={() => signOut()}
        >
            Log Out
        </button>
    );
}

export { LoginButton, LogoutButton };
