import "@/styles/global.css";
import type { Metadata } from "next";
import { doodle, sans, footer } from "@/styles/fonts";
import Navbar from "@/components/layout/navbar";
import Providers from "@/components/layout/Provider";

export const metadata: Metadata = {
    title: {
        template: "%s · Akhamr.tech",
        default: "Boti.",
    },
    description: "Chatbot berbasis AI",
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
            className={`h-full ${doodle.variable} ${sans.variable} ${footer.variable}`}
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
