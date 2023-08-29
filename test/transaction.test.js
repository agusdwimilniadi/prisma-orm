import { prismaClient } from '../src/prisma-client';

describe('Prisma client', () => {
  it('Should can execute transaction', async () => {
    const [array1, array2] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: '1',
          email: 'agus1@gmail.com',
          name: 'Agus 1',
          phone: '085812557541111',
        },
      }),
      prismaClient.customer.create({
        data: {
          id: '2',
          email: 'agus2@gmail.com',
          name: 'Agus 2',
          phone: '085812557541222',
        },
      }),
    ]);
    expect(array1.name).toBe('Agus 1');
    expect(array2.name).toBe('Agus 2');
  });

  it('Should can execute interactive transaction', async () => {
    const [array1, array2] = await prismaClient.$transaction(async (prisma) => {
      const array1 = await prisma.customer.create({
        data: {
          id: '5',
          email: 'agus5@gmail.com',
          name: 'Agus 5',
          phone: '085812557555555',
        },
      });
      const array2 = await prisma.customer.create({
        data: {
          id: '6',
          email: 'agus6@gmail.com',
          name: 'Agus 6',
          phone: '085812557566666',
        },
      });
      return [array1, array2];
    });
    expect(array1.name).toBe('Agus 5');
    expect(array2.name).toBe('Agus 6');
  });
});
