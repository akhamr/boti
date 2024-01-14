import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { LogoutButton } from "@/components/login-button";

export default async function Chat() {
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }

    return (
        <section id="chat-content">
            <LogoutButton />
        </section>
    );
}
