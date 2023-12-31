"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b-2 border-dashed border-gray-200 bg-white dark:border-gray-800 dark:bg-dark">
            <div className="mx-auto flex max-w-[85%] items-center justify-between py-2">
                <Link
                    href="/"
                    className="rounded px-2.5 py-1.5 font-doodle text-xl font-semibold transition duration-200 ease-in-out hover:bg-zinc-300 dark:hover:bg-zinc-700"
                >
                    Boti.
                </Link>
                <div className="flex items-center space-x-3 px-2.5">
                    <Link
                        href="/about"
                        className="rounded px-3.5 py-2.5 text-sm font-semibold transition duration-200 ease-in-out hover:bg-zinc-300 dark:hover:bg-zinc-700"
                    >
                        About
                    </Link>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
}
