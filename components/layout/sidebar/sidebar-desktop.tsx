import { auth } from "@/lib/auth";
import { buttonVariants } from "../../ui/button";
import { IconNew } from "../../ui/icons";
import { UserMenu } from "./sidebar-menu";

import { Sidebar } from "@/components/layout/sidebar/sidebar";
import { SidebarList } from "@/components/layout/sidebar/sidebar-list";
import { getChats } from "@/lib/actions";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export async function SidebarDesktop() {
  const session = await auth();
  const chats = await getChats(session?.user.id);

  if (!session?.user?.id) {
    return null;
  }

  return (
    <Sidebar className="peer fixed bottom-2 left-3 top-[72px] z-30 flex w-[250px] -translate-x-[calc(100%_+_1rem)] flex-col rounded-lg border-2 border-dashed bg-background p-2 transition-transform duration-300 ease-in-out data-[state=open]:translate-x-0 md:left-1">
      <Link
        href="/chat"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "mb-2 h-12 justify-between bg-muted p-3"
        )}
      >
        New Chat
        <IconNew />
      </Link>
      <Suspense
        fallback={
          <div className="h-full space-y-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="h-11 w-full shrink-0 animate-pulse rounded-md bg-secondary"
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
