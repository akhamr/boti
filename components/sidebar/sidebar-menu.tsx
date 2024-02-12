"use client";

import Image from "next/image";
import { type Session } from "next-auth";

import {
    Menubar,
    MenubarMenu,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { IconClear, IconOut } from "../ui/icons";

export interface UserMenuProps {
    user: Session["user"];
}

function getUserInitials(name: string) {
    const [firstName, lastName] = name.split(" ");
    return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2);
}

export function UserMenu({ user }: UserMenuProps) {
    return (
        <Menubar className="mr-2 justify-normal">
            <MenubarMenu>
                <MenubarTrigger className="w-full">
                    {user?.image ? (
                        <Image
                            className="size-8 select-none rounded-full ring-1 ring-zinc-100/10 transition-opacity duration-300 hover:opacity-80"
                            src={user?.image ? `${user.image}&s=60` : ""}
                            alt={user.name ?? "Avatar"}
                            height={32}
                            width={32}
                        />
                    ) : (
                        <div className="flex size-7 shrink-0 select-none items-center justify-center rounded-full bg-muted/50 font-medium uppercase text-muted-foreground">
                            {user?.name ? getUserInitials(user?.name) : null}
                        </div>
                    )}
                    <span className="ml-2">{user?.name}</span>
                </MenubarTrigger>
                <MenubarContent
                    sideOffset={8}
                    align="start"
                    className="mx-1 w-[230px]"
                >
                    <MenubarItem>
                        <IconClear />
                        <span className="ml-2">Clear History</span>
                    </MenubarItem>
                    <MenubarSeparator className="mx-0.5 my-1.5" />
                    <MenubarItem>
                        <IconOut />
                        <span className="ml-2">Log Out</span>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}
