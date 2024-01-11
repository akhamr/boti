import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { LogoutButton } from "@/components/login-button";

export default async function Chat() {
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }

    return (
        <section id="main-content" className="flex h-full items-center">
            <LogoutButton />
        </section>
    );
}
