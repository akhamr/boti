import ThemeToggle from "./theme-toggler";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import SidebarToggle from "@/components/layout/sidebar";
import Link from "next/link";

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="bg-background fixed top-0 z-20 w-full border-b-2 border-dashed">
      <div className="mx-auto flex max-w-[85%] items-center justify-between py-2">
        <div className="flex items-center space-x-2">
          {session?.user && <SidebarToggle />}
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "font-doodle text-xl font-semibold",
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
