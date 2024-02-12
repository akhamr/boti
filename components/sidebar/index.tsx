"use client";

import { useParams, usePathname } from "next/navigation";
import { IconSidebar } from "@/components/ui/icons";
import { useSidebar } from "@/lib/hooks/use-sidebar";

export default function SidebarToggle() {
    const pathname = usePathname();
    const params = useParams();
    const { toggleSidebar } = useSidebar();

    return (
        <>
            {(pathname == "/chat" || pathname == `/chat/${params.id}`) && (
                <>
                    <button
                        className="rounded p-1.5 transition duration-200 ease-in-out hover:bg-input"
                        onClick={() => {
                            toggleSidebar();
                        }}
                    >
                        <IconSidebar className="7 w-7" />
                    </button>
                    <p className="font-doodle text-xl">|</p>
                </>
            )}
        </>
    );
}
