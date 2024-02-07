import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { nanoid } from "@/lib/utils";
import Chat from "@/components/chat";

export default async function IndexPage() {
    const session = await auth();

    const id = nanoid();

    if (!session?.user) {
        redirect("/");
    }

    return <Chat id={id} />;
}
