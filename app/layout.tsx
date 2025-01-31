import Navbar from "@/components/layout/navbar";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import { doodle, nunito } from "@/styles/font";
import "@/styles/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(`https://boti.akhamr.me`),
  title: {
    template: "%s · Bot-I.",
    default: "Bot-I. by Akha",
  },
  description: "An AI-based chatbot built with Vercel KV and Gemini API.",
};

export default function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(nunito.className, doodle.variable)}>
        <Providers>
          <Navbar />
          <main className="mt-14 flex-1 bg-muted">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
