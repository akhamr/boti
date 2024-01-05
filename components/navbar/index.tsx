import Link from "next/link";
import ThemeToggle from "./theme-toggler";
import { IconInformation } from "@/components/ui/icons";
import SidebarToggle from "./sidebar-toggler";

export default async function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b-2 border-dashed border-input">
            <div className="mx-auto flex max-w-[85%] justify-between py-2">
                <div className="flex items-center space-x-0.5">
                    <SidebarToggle />
                    <Link
                        href="/"
                        className="font-doodle rounded px-2 py-1.5 text-xl font-semibold transition duration-200 ease-in-out hover:bg-input"
                    >
                        Bot-I.
                    </Link>
                </div>
                <div className="flex items-center space-x-2.5 pr-2">
                    <Link
                        href="/about"
                        className="rounded-full p-2 transition duration-200 ease-in-out hover:bg-input"
                    >
                        <IconInformation className="h-6 w-6" />
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
