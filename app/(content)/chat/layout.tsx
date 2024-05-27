import { SidebarDesktop } from "@/components/layout/sidebar/sidebar-desktop";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-dvh overflow-hidden">
      <SidebarDesktop />
      {children}
    </section>
  );
}
