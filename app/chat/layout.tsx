import { SidebarDesktop } from "@/components/sidebar/sidebar-desktop";

export default async function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-[calc(100dvh_-_57.6px)]">
            <SidebarDesktop />
            <div className="group w-full select-text p-2 duration-300 ease-in-out animate-in peer-[[data-state=open]]:md:pl-[calc(250px_+_1rem)]">
                {children}
            </div>
        </div>
    );
}
