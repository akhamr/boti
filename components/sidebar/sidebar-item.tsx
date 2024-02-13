"use client";

import * as React from "react";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { type Chat } from "@/lib/types";
import { cn } from "@/lib/utils";
import { IconMessage } from "../ui/icons";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
    chat: Chat;
    children: React.ReactNode;
}

export function SidebarItem({ chat, children }: SidebarItemProps) {
    const pathname = usePathname();

    const isActive = pathname === chat.path;
    if (!chat?.id) return null;

    return (
        <>
            <Link
                href={chat.path}
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full justify-normal px-2 py-0.5",
                    isActive && "bg-zinc-200 font-semibold dark:bg-zinc-800"
                )}
            >
                <div className="mr-1.5 flex items-center justify-center">
                    <IconMessage />
                </div>
                <div className="w-full select-none overflow-hidden text-ellipsis break-all">
                    <span>{chat.title}</span>
                </div>
                {isActive && children}
            </Link>
        </>
    );
}
