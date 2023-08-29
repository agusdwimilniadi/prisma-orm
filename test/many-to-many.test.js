import { prismaClient } from '../src/prisma-client';

describe('Prisma Client', () => {
  it('should be able to create many to many relation', async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: '10',
        product_id: 'P0002',
      },
      include: {
        customer: true,
        product: true,
      },
    });
    console.info(like);
  });
  it('should be able to find with inclue', async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: '10',
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });
    console.info(JSON.stringify(customer));
  });
});
