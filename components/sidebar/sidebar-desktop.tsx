import { Sidebar } from "@/components/sidebar/sidebar";
import { LogoutButton } from "../login-button";

export async function SidebarDesktop() {
    return (
        <Sidebar className="peer fixed bottom-2 left-2 top-[68px] z-30 hidden -translate-x-[calc(100%_+_0.5rem)] rounded-md border-2 border-dashed border-input bg-background p-2 duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
            <LogoutButton />
        </Sidebar>
    );
}
