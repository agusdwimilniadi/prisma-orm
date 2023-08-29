import { PrismaClient } from '@prisma/client';

describe('Prisma client', () => {
  it('Should be able to conenect database', async () => {
    const prisma = new PrismaClient();
    await prisma.$connect();

    // do something insert, delete, dll
    await prisma.$disconnect();
  });
});
