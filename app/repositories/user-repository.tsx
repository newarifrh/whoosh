import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const findUsers = async () => {
  const users = await prisma.user.findMany();

  return users;
};

const findUserById = async (id: string) => {
  const user = await prisma.user.findFirst({
    where: { id: id },
  });

  return user;
};

const createUser = async ({ name, email }: { name: string; email: string }) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  return user;
};

const updateUserById = async (
  id: string,
  { name, email }: { name: string; email: string }
) => {
  const user = await prisma.user.update({
    where: { id: id },
    data: {
      name,
      email,
    },
  });

  return user;
};

const deleteUserById = async (id: string) => {
  await prisma.user.delete({
    where: {
      id: id,
    },
  });
};

export { findUsers, findUserById, createUser, updateUserById, deleteUserById };
