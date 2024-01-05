import "@/styles/global.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { doodle, sans } from "@/styles/font";

export const metadata: Metadata = {
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    title: {
        template: "%s · Bot-I.",
        default: "Bot-I. by Akha",
    },
    description:
        "Bot-I. (read: boti) is an AI-based chatbot built with Next.js, Vercel, and OpenAI API.",
    // openGraph: {
    //     type: "website",
    //     images: [
    //         {
    //             url: "default/og.png",
    //             width: 300,
    //         },
    //     ],
    // },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <body
                className={cn(
                    "flex h-full flex-col justify-between",
                    doodle.variable,
                    sans.variable
                )}
            >
                <ThemeProvider attribute="class" enableSystem={false}>
                    <Navbar />
                    <main className="mx-auto max-w-[85%] flex-1">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
