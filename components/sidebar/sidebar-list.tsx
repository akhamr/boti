import { getChats } from "@/lib/actions";
import { SidebarItems } from "@/components/sidebar/sidebar-items";
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

    return (
        <>
            {chats?.length ? (
                <div className="mb-2 h-full space-y-1 overflow-x-hidden pr-2">
                    <SidebarItems chats={chats} />
                </div>
            ) : (
                <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                        No chat history
                    </p>
                </div>
            )}
        </>
    );
}
