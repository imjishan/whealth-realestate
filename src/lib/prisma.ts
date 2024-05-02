// create a global client for your prisma db for crud operations
import { PrismaClient } from "@prisma/client";

// this is needed for next.js to work with prisma
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();

// this is needed for next.js to work with prisma
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
