import { authConfig } from "@/auth.config";
import NextAuth, { type DefaultSession } from "next-auth";
import Github from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's id. */
      id: string;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [Github],
});
