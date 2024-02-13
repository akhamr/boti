import { auth } from "@/lib/auth";
import { Suspense } from "react";

import { Sidebar } from "@/components/sidebar/sidebar";
import { SidebarList } from "@/components/sidebar/sidebar-list";
import Link from "next/link";
import { IconNew } from "../ui/icons";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { UserMenu } from "./sidebar-menu";
import { getChats } from "@/lib/actions";

export async function SidebarDesktop() {
    const session = await auth();
    const chats = await getChats(session?.user.id);

    if (!session?.user?.id) {
        return null;
    }

    return (
        <Sidebar className="peer fixed bottom-2 left-2 top-[68px] z-30 hidden -translate-x-[calc(100%_+_0.5rem)] flex-col rounded-md border-2 border-dashed bg-background p-2 pr-0 duration-300 ease-in-out data-[state=open]:translate-x-0 md:flex md:w-[250px]">
            <Link
                href="/chat"
                className={cn(
                    buttonVariants({ variant: "outline" }),
                    "mb-2 mr-2 h-12 justify-between bg-zinc-50 px-3 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10"
                )}
            >
                New Chat
                <IconNew />
            </Link>
            <Suspense
                fallback={
                    <div className="mb-2 h-full space-y-1 pr-2">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-10 w-full shrink-0 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800"
                            />
                        ))}
                    </div>
                }
            >
                <SidebarList userId={session.user.id} />
            </Suspense>
            <UserMenu user={session.user} chat={chats} />
        </Sidebar>
    );
}
