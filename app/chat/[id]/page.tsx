import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function Chat({ params }: { params: { id: string } }) {
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }
    return (
        <section id="main-content" className="flex h-full items-center">
            <p>Ini Chat {params.id}!</p>
        </section>
    );
}
