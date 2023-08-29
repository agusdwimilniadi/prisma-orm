import { prismaClient } from '../src/prisma-client';

describe('prisma client', () => {
  it('should can do agregate function', async () => {
    const result = await prismaClient.product.aggregate({
      _min: {
        price: true,
        stock: true,
      },
      _max: {
        price: true,
        stock: true,
      },
      _avg: {
        price: true,
        stock: true,
      },
    });
    expect(result._min.price).toBe(1000);
  });

  it('should can do agregate function WITH GROUP BY', async () => {
    const result = await prismaClient.product.groupBy({
      by: ['category'],
      _min: {
        price: true,
        stock: true,
      },
      _max: {
        price: true,
        stock: true,
      },
      _avg: {
        price: true,
        stock: true,
      },
    });
    expect(result.length).toBe(1);
  });

  it('should can do agregate function WITH having', async () => {
    const result = await prismaClient.product.groupBy({
      by: ['category'],
      _min: {
        price: true,
        stock: true,
      },
      _max: {
        price: true,
        stock: true,
      },
      _avg: {
        price: true,
        stock: true,
      },
      having: {
        price: {
          _avg: {
            gt: 3000,
          },
        },
      },
    });
    expect(result.length).toBe(0);
  });
});
