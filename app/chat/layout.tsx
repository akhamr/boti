import { SidebarDesktop } from "@/components/sidebar/sidebar-desktop";

export default async function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative h-[calc(100vh_-_57.6px)]">
            <SidebarDesktop />
            <div className="group flex h-full w-full items-center justify-center overflow-auto pl-0 duration-300 ease-in-out animate-in peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
                {children}
            </div>
        </div>
    );
}
