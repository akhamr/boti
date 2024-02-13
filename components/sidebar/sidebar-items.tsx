import { Chat } from "@/lib/types";

import { SidebarItem } from "@/components/sidebar/sidebar-item";
import { SidebarActions } from "@/components/sidebar/sidebar-actions";

import { removeChat } from "@/lib/actions";

interface SidebarItemsProps {
    chats?: Chat[];
}

export function SidebarItems({ chats }: SidebarItemsProps) {
    if (!chats?.length) return null;

    return (
        <>
            {chats.map((chat) => (
                <div key={chat?.id}>
                    <SidebarItem chat={chat}>
                        <SidebarActions chat={chat} removeChat={removeChat} />
                    </SidebarItem>
                </div>
            ))}
        </>
    );
}
