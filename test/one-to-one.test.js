import { prismaClient } from '../src/prisma-client';

describe('prisma client', () => {
  it('should can create one to one relation', async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: '4',
        customer_id: '4',
        ballance: 10000000,
      },
      include: {
        Customer: true,
      },
    });
    console.info(wallet);
  });

  it('should can create one to one with relation', async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: 'joko2',
        email: 'joko2@gmail.com',
        name: 'Joko 2',
        phone: '098989883812',
        wallet: {
          create: {
            ballance: 900000,
            id: 'agus23232',
          },
        },
      },
      include: {
        wallet: true,
      },
    });
    console.info(customer);
  });

  it('should can find one to one relation with relation', async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: '3',
      },
      include: {
        wallet: true,
      },
    });
    console.info(customer);
  });

  it('should can find one to one relation with relation filter', async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });
    console.info(customer);
  });
});
