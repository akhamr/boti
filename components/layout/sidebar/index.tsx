"use client";

import { Button } from "@/components/ui/button";
import { IconSidebar } from "@/components/ui/icons";
import { useSidebar } from "@/lib/hooks/use-sidebar";
import { usePathname } from "next/navigation";

export default function SidebarToggle() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  return (
    pathname.startsWith("/chat") && (
      <>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            toggleSidebar();
          }}
        >
          <IconSidebar className="size-7" />
        </Button>
        <p className="font-doodle text-xl">|</p>
      </>
    )
  );
}
