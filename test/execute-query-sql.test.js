import { prismaClient } from '../src/prisma-client';

describe('Prisma Client', () => {
  it('should be able to execute sql', async () => {
    const id = '1';

    const sample =
      await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;
    for (const obj of sample) {
      console.info(`Result of query, id= ${obj.id} and name = ${obj.name}`);
    }
  });
});
