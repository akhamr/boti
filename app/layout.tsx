import { cn } from "@/lib/utils";
import { nunito, doodle } from "@/styles/font";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import "@/styles/global.css";

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
    <html lang="en">
      <body className={cn(nunito.className, doodle.variable)}>
        <Providers>
          <Navbar />
          <main className="bg-muted mt-14 flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
