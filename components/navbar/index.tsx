import Link from "next/link";
import { auth } from "@/lib/auth";
import ThemeToggle from "./theme-toggler";
import { IconInformation } from "@/components/ui/icons";
import SidebarToggle from "@/components/sidebar";

export default async function Navbar() {
    const session = await auth();
    return (
        <nav className="sticky top-0 z-50 w-full border-b-2 border-dashed border-input bg-background">
            <div className="mx-auto flex max-w-[85%] justify-between py-2">
                <div className="flex items-center space-x-0.5">
                    {session?.user ? (
                        <>
                            <SidebarToggle />
                            <Link
                                href="/chat"
                                className="rounded px-2 py-1.5 font-doodle text-xl font-semibold transition duration-200 ease-in-out hover:bg-input"
                            >
                                Bot-I.
                            </Link>
                        </>
                    ) : (
                        <Link
                            href="/"
                            className="rounded px-2 py-1.5 font-doodle text-xl font-semibold transition duration-200 ease-in-out hover:bg-input"
                        >
                            Bot-I.
                        </Link>
                    )}
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
