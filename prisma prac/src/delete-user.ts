import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.delete({
    where: {
      id: 1,
    },
  });
}
main();
