import { prismaClient } from '../src/prisma-client';

describe('Prisma Client', () => {
  it('should can create many record', async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: '8',
          email: 'agus8@gmail.com',
          name: 'Agus 8',
          phone: '08581255754888',
        },
        {
          id: '9',
          email: 'agus9@gmail.com',
          name: 'Agus 9',
          phone: '08581255754899',
        },
      ],
    });
    expect(count).toBe(2);
  });
  it('should to able update many record', async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: 'aguslagi@pzn.com',
      },
      where: {
        name: 'Agus 1',
      },
    });
    expect(count).toBe(1);
  });

  it('Should to be delete many', async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: 'Asu',
      },
    });
    expect(count).toBe(0);
  });

  it('should to able get many record', async () => {
    const customers = await prismaClient.customer.findMany({});
    expect(customers.length).toBe(10);
  });
});
