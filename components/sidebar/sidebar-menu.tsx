"use client";

import Image from "next/image";
import { type Session } from "next-auth";
import { type Chat } from "@/lib/types";
import { signOut } from "next-auth/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { clearChats } from "@/lib/actions";
import { IconOut } from "../ui/icons";
import { ClearHistory } from "../clear-history";

export interface UserMenuProps {
    user: Session["user"];
    chat: Chat[];
}

function getUserInitials(name: string) {
    const [firstName, lastName] = name.split(" ");
    return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2);
}

export function UserMenu({ user, chat }: UserMenuProps) {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="mr-2 flex h-12 select-none items-center rounded-md border bg-zinc-50 p-2 px-2.5 py-1.5 text-sm font-medium outline-none hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10">
                {user?.image ? (
                    <Image
                        className="size-8 rounded-full ring-1 ring-zinc-100/10 transition-opacity duration-300 hover:opacity-80"
                        src={user?.image ? `${user.image}&s=60` : ""}
                        alt={user.name ?? "Avatar"}
                        height={32}
                        width={32}
                    />
                ) : (
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted/50 font-medium uppercase text-muted-foreground">
                        {user?.name ? getUserInitials(user?.name) : null}
                    </div>
                )}
                <span className="ml-2">{user?.name}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                className="hide mx-0 mb-1 w-[230px]"
            >
                <DropdownMenuItem asChild>
                    <ClearHistory
                        clearChats={clearChats}
                        isEnabled={chat?.length > 0}
                    />
                </DropdownMenuItem>
                <DropdownMenuSeparator className="mx-0.5 my-1.5" />
                <DropdownMenuItem onClick={() => signOut()}>
                    <IconOut />
                    <span className="ml-2">Log Out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
