import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/lib/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

// Parse DATABASE_URL untuk MariaDB adapter
// Format: mysql://user:password@host:port/database
function getDatabaseConfig() {
    const url = process.env.DATABASE_URL;
    if (!url) {
        throw new Error("DATABASE_URL is not defined");
    }

    try {
        const parsedUrl = new URL(url);
        return {
            host: parsedUrl.hostname,
            port: parsedUrl.port ? Number(parsedUrl.port) : 3306,
            user: parsedUrl.username,
            password: parsedUrl.password,
            database: parsedUrl.pathname.slice(1), // Remove leading /
        };
    } catch (error) {
        console.error("Failed to parse DATABASE_URL:", error);
        throw error;
    }
}

const dbConfig = getDatabaseConfig();
const adapter = new PrismaMariaDb({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    connectionLimit: 5,
});

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
        log:
            process.env.NODE_ENV === "development"
                ? [
                      { level: "query", emit: "event" },
                      { level: "error", emit: "stdout" },
                      { level: "warn", emit: "stdout" },
                  ]
                : ["error"],
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
