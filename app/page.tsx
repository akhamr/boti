import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { LoginButton } from "@/components/layout/Login";

export default async function HomePage() {
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
