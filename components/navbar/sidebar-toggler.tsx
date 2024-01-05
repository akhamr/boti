"use client";

import { useParams, usePathname } from "next/navigation";
import { IconSidebar } from "@/components/ui/icons";

export default function SidebarToggle() {
    const pathname = usePathname();
    const params = useParams();

    return (
        <>
            {(pathname == "/chat" || pathname == `/chat/${params.id}`) && (
                <>
                    <button className="rounded p-1.5 transition duration-200 ease-in-out hover:bg-zinc-300 dark:hover:bg-zinc-700">
                        <IconSidebar className="h-7 w-7" />
                    </button>
                    <p className="font-doodle text-xl">|</p>
                </>
            )}
        </>
    );
}
