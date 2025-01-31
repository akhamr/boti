"use client";

import { ClearHistory } from "@/components/clear-history";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconOut } from "@/components/ui/icons";
import { SignOut, clearChats } from "@/lib/actions";
import { type Chat } from "@/lib/types";
import { cn } from "@/lib/utils";
import { type Session } from "next-auth";
import Image from "next/image";

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
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: "outline" }),
          "h-12 justify-start bg-muted px-2.5 py-1.5"
        )}
      >
        {user?.image ? (
          <Image
            className="rounded-full"
            src={`${user.image}&s=60`}
            alt={user.name ?? "Avatar"}
            height={32}
            width={32}
          />
        ) : (
          <div className="flex size-8 items-center justify-center rounded-full bg-border font-medium uppercase">
            {user.name && getUserInitials(user.name)}
          </div>
        )}
        <span className="ml-3">{user?.name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[230px]">
        <DropdownMenuItem asChild>
          <ClearHistory clearChats={clearChats} isEnabled={chat?.length > 0} />
        </DropdownMenuItem>
        <DropdownMenuSeparator className="mx-0.5 my-1.5" />
        <DropdownMenuItem onClick={() => SignOut()}>
          <IconOut />
          <span className="ml-2">Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
