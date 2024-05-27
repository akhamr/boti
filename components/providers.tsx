import { SidebarProvider } from "@/lib/hooks/use-sidebar";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
}
