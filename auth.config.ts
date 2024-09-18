import type { NextAuthConfig } from "next-auth";
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
  pages: {
    signIn: "/signin",
  },
  callbacks: {
      authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = true;
        const isOnDashboard = nextUrl.pathname.startsWith('/chats');
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false; // Redirect unauthenticated users to login page
        } else if (isLoggedIn) {
          return Response.redirect(new URL('/chat', nextUrl));
        }
        return true;
      },
    },
    providers: [
      Credentials({
      async authorize(credentials) {
        return null;
      },
    }),
    ], // Add providers with an empty array for now
  } satisfies NextAuthConfig
