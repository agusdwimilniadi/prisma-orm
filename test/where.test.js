import { prismaClient } from '../src/prisma-client';

it('Prisma Client', () => {
  it('should can using or operator', async () => {
    const products = await prismaClient.product.findMany({
      where: {
        OR: [
          {
            name: 'A',
          },
          {
            name: 'B',
          },
        ],
      },
      orderBy: [
        {
          name: 'asc',
        },
      ],
    });
    expect(products[0].name).toBe('A');
  });
});
