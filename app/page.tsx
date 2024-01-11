import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { LoginButton } from "@/components/login-button";

export default async function Home() {
    const session = await auth();

    if (session?.user) {
        redirect("/chat");
    }

    return (
        <section id="main-content" className="flex h-full items-center">
            <LoginButton />
        </section>
    );
}
