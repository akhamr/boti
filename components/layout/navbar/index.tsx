"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { InformationCircleIcon } from "@heroicons/react/16/solid";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b-2 border-dashed border-gray-200 bg-white dark:border-gray-800 dark:bg-dark">
            <div className="mx-auto flex max-w-[85%] items-center justify-between py-2">
                <Link
                    href="/"
                    className="rounded px-2.5 py-1.5 font-doodle text-xl font-semibold transition duration-200 ease-in-out hover:bg-zinc-300 dark:hover:bg-zinc-700"
                >
                    Bot-I.
                </Link>
                <div className="flex items-center space-x-2.5 px-2.5">
                    <Link
                        href="/about"
                        className="rounded-full p-2 transition duration-200 ease-in-out hover:bg-zinc-300 dark:hover:bg-zinc-700"
                    >
                        <InformationCircleIcon className="h-6 w-6" />
                    </Link>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
}
