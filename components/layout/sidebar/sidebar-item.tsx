"use client";

import { IconMessage } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { type Chat } from "@/lib/types";
import { cn } from "@/lib/utils";
import * as React from "react";

import Link from "next/link";

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
          "hover:bg-accent w-full justify-normal",
          isActive && "bg-accent font-semibold",
        )}
      >
        <div className="mr-1.5">
          <IconMessage />
        </div>
        <span className="overflow-x-hidden text-ellipsis break-all">
          {chat.title}
        </span>
        {isActive && children}
      </Link>
    </>
  );
}
