"use client";

import * as React from "react";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { type Chat } from "@/lib/types";
import { cn } from "@/lib/utils";
import { IconMessage } from "../ui/icons";

interface SidebarItemProps {
    chat: Chat;
}

export function SidebarItem({ chat }: SidebarItemProps) {
    if (!chat?.id) return null;

    return (
        <>
            <Link
                href={chat.path}
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-full justify-normal px-2 py-0.5"
                )}
            >
                <div className="mr-1.5 flex items-center justify-center">
                    <IconMessage />
                </div>
                <div className="select-none overflow-hidden text-ellipsis break-all">
                    <span>{chat.title}</span>
                </div>
            </Link>
        </>
    );
}
