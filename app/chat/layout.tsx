import { SidebarDesktop } from "@/components/sidebar/sidebar-desktop";

export default async function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex overflow-hidden">
            <SidebarDesktop />
            <div className="group w-full select-text overflow-auto p-2 duration-300 ease-in-out animate-in peer-[[data-state=open]]:lg:pl-[calc(250px_+_1rem)] peer-[[data-state=open]]:xl:pl-[calc(300px_+_1rem)]">
                {children}
            </div>
        </div>
    );
}
