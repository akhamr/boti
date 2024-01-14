"use client";

import { SidebarProvider } from "@/lib/hooks/use-sidebar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function Providers({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider {...props}>
            <SidebarProvider>{children}</SidebarProvider>
        </NextThemesProvider>
    );
}
