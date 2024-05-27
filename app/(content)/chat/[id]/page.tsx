import { auth } from "@/lib/auth";
import { getChat } from "@/lib/actions";
import Chat from "@/components/chat";
import { notFound, redirect } from "next/navigation";
import { type Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const session = await auth();

  if (!session?.user) {
    return {};
  }

  const chat = await getChat(params.id, session.user.id);
  return {
    title: chat?.title.toString().slice(0, 50) ?? "Chat",
  };
}

export default async function ChatId({ params }: { params: { id: string } }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const chat = await getChat(params.id, session.user.id);

  if (!chat) {
    notFound();
  }

  if (chat?.userId !== session.user.id) {
    notFound();
  }

  return <Chat id={chat.id} initialMessages={chat.messages} />;
}
