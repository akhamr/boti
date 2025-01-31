"use server";

import { auth, signIn, signOut } from "@/lib/auth";
import { type Chat } from "@/lib/types";
import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getChats(userId?: string | null) {
  if (!userId) {
    return [];
  }

  try {
    const pipeline = kv.pipeline();
    const chats: string[] = await kv.zrange(`user:chat:${userId}`, 0, -1, {
      rev: true,
    });

    for (const chat of chats) {
      pipeline.hgetall(chat);
    }

    const results = await pipeline.exec();

    return results as Chat[];
  } catch (error) {
    return [];
  }
}

export async function getChat(id: string, userId: string) {
  const chat = await kv.hgetall<Chat>(`chat:${id}`);

  if (!chat || (userId && chat.userId !== userId)) {
    return null;
  }

  return chat;
}

export async function removeChat({ id }: { id: string }) {
  const session = await auth();

  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await kv.del(`chat:${id}`);
  await kv.zrem(`user:chat:${session.user.id}`, `chat:${id}`);

  revalidatePath("/chat");
  return redirect("/chat");
}

export async function clearChats() {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Unauthorized",
    };
  }

  const chats: string[] = await kv.zrange(
    `user:chat:${session.user.id}`,
    0,
    -1
  );
  if (!chats.length) {
    return redirect("/chat");
  }
  const pipeline = kv.pipeline();

  for (const chat of chats) {
    pipeline.del(chat);
    pipeline.zrem(`user:chat:${session.user.id}`, chat);
  }

  await pipeline.exec();

  revalidatePath("/chat");
  return redirect("/chat");
}

export async function SignIn() {
  return await signIn("github");
}

export async function SignOut() {
  return await signOut({ redirectTo: "/" });
}

export async function Redirect() {
  return redirect("/chat");
}
