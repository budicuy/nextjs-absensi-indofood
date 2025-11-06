// Auth configuration untuk proxy (Edge Runtime compatible)
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
            const isOnLoginPage = nextUrl.pathname === "/";

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            }

            if (isLoggedIn && isOnLoginPage) {
                return Response.redirect(new URL("/dashboard", nextUrl));
            }

            return true;
        },
    },
    providers: [], // Add providers with an empty array for the proxy
} satisfies NextAuthConfig;
