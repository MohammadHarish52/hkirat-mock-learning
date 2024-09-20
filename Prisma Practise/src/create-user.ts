import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  await prisma.user.create({
    data: {
      name: "Ishita",
      email: "cuteishitaaaaaa.io",
      posts: {
        create: { title: "So jaaaaooo Harishhhh" },
      },
      profile: {
        create: { bio: "Sea Fish" },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
}
main();
