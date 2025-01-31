import { Chat } from "@/lib/types";

import { SidebarActions } from "@/components/layout/sidebar/sidebar-actions";
import { SidebarItem } from "@/components/layout/sidebar/sidebar-item";

import { removeChat } from "@/lib/actions";

interface SidebarItemsProps {
  chats?: Chat[];
}

export function SidebarItems({ chats }: SidebarItemsProps) {
  if (!chats?.length) return null;

  return chats.map((chat) => (
    <SidebarItem key={chat?.id} chat={chat}>
      <SidebarActions chat={chat} removeChat={removeChat} />
    </SidebarItem>
  ));
}
