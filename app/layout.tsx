import "@/styles/global.css";
import type { Metadata } from "next";
import { doodle, sans } from "@/styles/fonts";
import Navbar from "@/components/layout/navbar";
import Providers from "@/components/layout/Provider";

export const metadata: Metadata = {
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    title: {
        template: "%s · Bot-I.",
        default: "Bot-I. by Akha",
    },
    description:
        "Bot-I. (read: boti) is an AI-based chatbot built with Next.js, Vercel, and OpenAI API.",
    openGraph: {
        type: "website",
        images: [
            {
                url: "default/og.png",
                width: 300,
            },
        ],
    },
};

// Motion page bugged 10.16.2

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`h-full ${doodle.variable} ${sans.variable}`}
            suppressHydrationWarning
        >
            <body className="flex h-full select-none flex-col justify-between">
                <Providers>
                    <Navbar />
                    <main className="mx-auto max-w-[85%] flex-1">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
