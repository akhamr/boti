import { UserMenu } from "./sidebar-menu";
import { IconNew } from "../../ui/icons";
import { buttonVariants } from "../../ui/button";
import { auth } from "@/lib/auth";

import { Sidebar } from "@/components/layout/sidebar/sidebar";
import { SidebarList } from "@/components/layout/sidebar/sidebar-list";
import { cn } from "@/lib/utils";
import { getChats } from "@/lib/actions";
import Link from "next/link";
import { Suspense } from "react";

export async function SidebarDesktop() {
  const session = await auth();
  const chats = await getChats(session?.user.id);

  if (!session?.user?.id) {
    return null;
  }

  return (
    // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
    <Sidebar className="bg-background peer fixed bottom-1.5 left-1 top-[68px] z-30 flex w-[250px] -translate-x-[calc(100%_+_1rem)] flex-col rounded-lg border-2 border-dashed p-2 transition-transform duration-300 ease-in-out data-[state=open]:translate-x-0">
      <Link
        href="/chat"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "bg-muted mb-2 h-12 justify-between p-3",
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
                className="bg-secondary h-11 w-full shrink-0 animate-pulse rounded-md"
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
