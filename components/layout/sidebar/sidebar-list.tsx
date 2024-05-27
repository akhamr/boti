import { getChats } from "@/lib/actions";
import { SidebarItems } from "@/components/layout/sidebar/sidebar-items";
import { cache } from "react";

interface SidebarListProps {
  userId?: string;
  children?: React.ReactNode;
}

const loadChats = cache(async (userId?: string) => {
  return await getChats(userId);
});

export async function SidebarList({ userId }: SidebarListProps) {
  const chats = await loadChats(userId);

  return chats?.length ? (
    <div className="h-full space-y-2">
      <SidebarItems chats={chats} />
    </div>
  ) : (
    <div className="flex h-full items-center justify-center">
      <p className="text-foreground text-sm">No chat history</p>
    </div>
  );
}
