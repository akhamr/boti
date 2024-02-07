import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Chat from "@/components/chat";

export default async function IndexPage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }

    return (
        <section id="chat-content">
            <Chat />
        </section>
    );
}
