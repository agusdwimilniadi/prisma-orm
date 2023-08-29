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
  it('should be able to find with inclue and filter', async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: 'A',
              },
            },
          },
        },
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

  it('should can update implicit relation', async () => {
    const customer = await prismaClient.customer.update({
      where: {
        id: '10',
      },
      data: {
        loves: {
          connect: [
            {
              id: 'P0002',
            },
            {
              id: 'P0003',
            },
          ],
        },
      },
      include: {
        loves: true,
      },
    });
    console.info(customer);
  });

  it('should can find many implicit relation', async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: 'U',
            },
          },
        },
      },
      include: {
        loves: true,
      },
    });
    console.info(customer);
  });
});
