import { prismaClient } from '../src/prisma-client';

describe('Prisma Clinte', () => {
  it('should can do sorting', async () => {
    const customers = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: 'desc',
        },
        {
          email: 'asc',
        },
      ],
    });
  });
});
