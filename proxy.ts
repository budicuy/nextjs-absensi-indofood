import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

// Gunakan config tanpa Prisma untuk proxy (Edge Runtime compatible)
export default NextAuth(authConfig).auth;

export const config = {
    // Match all paths except static files
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
