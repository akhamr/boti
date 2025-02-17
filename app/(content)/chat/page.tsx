import Chat from "@/components/chat";
import { nanoid } from "@/lib/utils";

export default async function ChatPage() {
  const id = nanoid();

  return <Chat id={id} />;
}
