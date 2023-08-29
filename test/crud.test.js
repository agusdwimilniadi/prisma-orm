import { prismaClient } from '../src/prisma-client';

describe('Prisma client', () => {
  it('Should be able to create customer', async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: 'milniadi5',
        email: 'agusdwimill5@gmail.com',
        name: 'Agus Dwi',
        phone: '0858125575415',
      },
    });
    expect(customer.id).toBe('milniadi3');
    expect(customer.email).toBe('agusdwimill3@gmail.com');
    expect(customer.name).toBe('Agus Dwi');
    expect(customer.phone).toBe('0858125575413');
  });

  it('Should be able to update customer', async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: 'Agus Dwi2',
      },
      where: {
        id: 'milniadi3',
      },
    });
    expect(customer.id).toBe('milniadi3');
    expect(customer.email).toBe('agusdwimill3@gmail.com');
    expect(customer.name).toBe('Agus Dwi2');
    expect(customer.phone).toBe('0858125575413');
  });

  it('Should be able to read customer', async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: 'milniadi3',
      },
    });
    expect(customer.id).toBe('milniadi3');
    expect(customer.email).toBe('agusdwimill3@gmail.com');
    expect(customer.name).toBe('Agus Dwi2');
    expect(customer.phone).toBe('0858125575413');
  });
  it('Should be able to delete customer', async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: 'milniadi3',
      },
    });
    expect(customer.id).toBe('milniadi3');
    expect(customer.email).toBe('agusdwimill3@gmail.com');
    expect(customer.name).toBe('Agus Dwi2');
    expect(customer.phone).toBe('0858125575413');
  });
});
