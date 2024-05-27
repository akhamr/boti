import type { NextAuthConfig, Session } from "next-auth";

export const authConfig = {
  secret: process.env.AUTH_SECRET,
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname == "/";

      // cant access dashboard if not authorized
      return isLoggedIn && isOnLogin
        ? Response.redirect(new URL("/chat", nextUrl))
        : !!auth;
    },
    jwt({ token, profile }) {
      if (profile) {
        token.id = profile.id;
        token.image = profile.avatar_url || profile.picture;
      }
      return token;
    },
    session: ({ session, token }: { session: Session; token?: any }) => {
      if (session?.user && token?.id) {
        session.user.id = String(token.id);
      }
      return session;
    },
  },
  providers: [],
  pages: {
    signIn: "/",
  },
} satisfies NextAuthConfig;
