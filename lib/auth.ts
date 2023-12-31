import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    providers: [GitHub],
    callbacks: {
        jwt({ token, profile }) {
            if (profile) {
                token.id = profile.id;
                token.image = profile.avatar_url || profile.picture;
            }
            return token;
        },
        session: ({ session, token }) => {
            if (session?.user && token?.id) {
                session.user.id = String(token.id);
            }
            return session;
        },
        authorized({ auth }) {
            return !!auth?.user;
        },
    },
    pages: {
        signIn: "/",
    },
});
