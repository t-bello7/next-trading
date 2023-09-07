// import { PrismaClient } from '@prisma/client'
// declare global {
//   // allow global `var` declarations
//   // eslint-disable-next-line no-var
//   var prisma: PrismaClient | undefined
// }

// let prisma: PrismaClient

// if (typeof window === 'undefined') {
//   if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient()
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient()
//     }

//     prisma = global.prisma
//   }
// }
// //@ts-ignore
// export default prisma
import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

// let prisma: PrismaClient;

// if (typeof window === "undefined") {
//     if (process.env.NODE_ENV === "production") {
//         prisma = new PrismaClient();
//     } else {
//         if (!global.prisma) {
//         global.prisma = new PrismaClient();
//         }
//         prisma = global.prisma;
//     }
// }

// const prisma = new PrismaClient();

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query']
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma