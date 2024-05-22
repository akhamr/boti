import "@/styles/global.css";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { doodle, sans } from "@/styles/font";

export const metadata: Metadata = {
    metadataBase: new URL(`https://boti.akhamr.me`),
    title: {
        template: "%s · Bot-I.",
        default: "Bot-I. by Akha",
    },
    description: "An AI-based chatbot built with Vercel AI and Gemini API.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <body
                className={cn("flex flex-col", doodle.variable, sans.variable)}
            >
                <Providers
                    attribute="class"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main className="flex-1 bg-muted/20">{children}</main>
                </Providers>
            </body>
        </html>
    );
}
