"use client";

import { SidebarProvider } from "@/lib/hooks/use-sidebar";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

export function Providers({ children, ...props }: ThemeProviderProps) {
    const [init, _] = useOverlayScrollbars({
        defer: true,
    });

    useEffect(() => {
        init(document.body);
    }, [init]);
    return (
        <NextThemesProvider {...props}>
            <SidebarProvider>{children}</SidebarProvider>
        </NextThemesProvider>
    );
}
