import SidebarToggle from "@/components/layout/sidebar";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeToggle from "./theme-toggler";

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="fixed top-0 z-20 w-full border-b-2 border-dashed bg-background">
      <div className="mx-auto flex max-w-[85%] items-center justify-between py-2">
        <div className="flex items-center space-x-2">
          {session?.user && <SidebarToggle />}
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "font-doodle text-xl font-semibold"
            )}
          >
            Bot-I.
          </Link>
        </div>
        <ThemeToggle className="pr-2.5" />
      </div>
    </nav>
  );
}
