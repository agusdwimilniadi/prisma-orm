import { prismaClient } from '../src/prisma-client';

describe('prisma client', () => {
  it('Should can count', async () => {
    const total = await prismaClient.customer.count({
      where: {
        name: 'Eko',
      },
    });
    expect(total).toBe(0);
  });
});
