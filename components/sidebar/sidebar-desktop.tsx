import { auth } from "@/lib/auth";

import { Sidebar } from "@/components/sidebar/sidebar";
import { SidebarList } from "@/components/sidebar/sidebar-list";

export async function SidebarDesktop() {
    const session = await auth();

    if (!session?.user?.id) {
        return null;
    }

    return (
        <Sidebar className="peer fixed bottom-2 left-2 top-[68px] z-30 hidden -translate-x-[calc(100%_+_0.5rem)] rounded-md border-2 border-dashed bg-background p-2 pr-0 duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
            <SidebarList userId={session.user.id} />
        </Sidebar>
    );
}
