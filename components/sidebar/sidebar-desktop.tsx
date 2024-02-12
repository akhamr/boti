import { auth } from "@/lib/auth";
import { Suspense } from "react";

import { Sidebar } from "@/components/sidebar/sidebar";
import { SidebarList } from "@/components/sidebar/sidebar-list";
import Link from "next/link";
import { IconPlus } from "../ui/icons";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

function getUserInitials(name: string) {
    const [firstName, lastName] = name.split(" ");
    return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2);
}

export async function SidebarDesktop() {
    const session = await auth();

    if (!session?.user?.id) {
        return null;
    }

    return (
        <Sidebar className="peer fixed bottom-2 left-2 top-[68px] z-30 hidden -translate-x-[calc(100%_+_0.5rem)] flex-col rounded-md border-2 border-dashed bg-background p-2 pr-0 duration-300 ease-in-out data-[state=open]:translate-x-0 md:flex md:w-[250px]">
            <Link
                href="/chat"
                className={cn(
                    buttonVariants({ variant: "outline" }),
                    "mb-2 mr-2 justify-start bg-zinc-50 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10"
                )}
            >
                <IconPlus className="-translate-x-2 stroke-2" />
                New Chat
            </Link>
            <Suspense
                fallback={
                    <div className="space-y-1">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-6 w-full shrink-0 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800"
                            />
                        ))}
                    </div>
                }
            >
                <SidebarList userId={session.user.id} />
            </Suspense>
            <Button
                variant="outline"
                className="mr-2 h-12 justify-normal bg-zinc-50 p-2 hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10"
            >
                {session.user?.image ? (
                    <Image
                        className="size-8 select-none rounded-full ring-1 ring-zinc-100/10 transition-opacity duration-300 hover:opacity-80"
                        src={
                            session.user?.image
                                ? `${session.user.image}&s=60`
                                : ""
                        }
                        alt={session.user.name ?? "Avatar"}
                        height={32}
                        width={32}
                    />
                ) : (
                    <div className="flex size-7 shrink-0 select-none items-center justify-center rounded-full bg-muted/50 font-medium uppercase text-muted-foreground">
                        {session.user?.name
                            ? getUserInitials(session.user?.name)
                            : null}
                    </div>
                )}
                <span className="ml-2">{session.user?.name}</span>
            </Button>
        </Sidebar>
    );
}
