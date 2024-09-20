import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

async function main() {
  const user = await Prisma.user.update({
    where: {
      id: 2,
    },
    data: {
      email: "ishitacute@gmail.com",
    },
  });
}

main();
