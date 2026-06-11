import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

/**
 * Singleton Prisma Client for Next.js (Prisma 7 + pg driver adapter).
 *
 * In development, Next.js hot-reloads modules on every change which would
 * create a new PrismaClient instance each time — exhausting database
 * connections. The globalThis pattern ensures only one client exists.
 *
 * Usage:
 *   import { db } from "@/lib/db";
 *   const registrations = await db.registration.findMany();
 */

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const adapter = new PrismaPg(pool);

  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
}

export const db: PrismaClient =
  globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
