import { prismaClient } from '../src/prisma-client';

describe('Prisma client', () => {
  it('should can create data with relation one to many', async () => {
    const comment = await prismaClient.comment.create({
      data: {
        title: 'Comments test 1',
        description: 'Description comments 1',
        customer_id: '1',
      },
      include: {
        customer: true,
      },
    });
    console.info(comment);
  });
  it('should can comments and create user with many comments', async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: '10',
        email: 'user10@user.com',
        name: 'User 10',
        phone: '0858125575753',
        comments: {
          createMany: {
            data: [
              {
                title: 'Comments user 10 1',
                description: 'description user 10 1',
              },
              {
                title: 'Comments user 10 2',
                description: 'description user 10 2',
              },
            ],
          },
        },
      },
      include: {
        comments: true,
        wallet: true,
      },
    });
    console.info(customer);
  });
  it('should can filter comments with realtion filter', async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: 'comments',
            },
          },
        },
      },
      include: {
        comments: true,
        wallet: true,
      },
    });
    console.info(customer);
  });
});
