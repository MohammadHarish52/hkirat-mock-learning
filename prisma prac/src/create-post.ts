import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.post.create({
    data: {
      title: "Hey their chicks",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
}
main();
