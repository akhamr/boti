import { Chat } from "@/lib/types";

import { SidebarItem } from "@/components/sidebar/sidebar-item";

interface SidebarItemsProps {
    chats?: Chat[];
}

export function SidebarItems({ chats }: SidebarItemsProps) {
    if (!chats?.length) return null;

    return (
        <>
            {chats.map((chat) => (
                <div key={chat?.id}>
                    <SidebarItem chat={chat} />
                </div>
            ))}
        </>
    );
}
