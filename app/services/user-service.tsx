import {
  createUser,
  deleteUserById,
  findUserById,
  findUsers,
  updateUserById,
} from "../repositories/user-repository";
import { CustomError } from "../types/error";

const getUsers = async () => {
  const users = await findUsers();

  return users;
};

const getUserById = async (id: string) => {
  const user = await findUserById(id);

  if (!user) {
    throw new CustomError("User not found", 404);
  }

  return user;
};

const saveUser = async ({ name, email }: { name: string; email: string }) => {
  const user = await createUser({ name, email });

  return user;
};

const modifyUserById = async (
  id: string,
  { name, email }: { name: string; email: string }
) => {
  const user = await findUserById(id);

  if (!user) {
    throw new CustomError("User not found", 404);
  }

  const userUpdated = await updateUserById(id, { name, email });

  return userUpdated;
};

const removeUserById = async (id: string) => {
  const user = await findUserById(id);

  if (!user) {
    throw new CustomError("User not found", 404);
  }

  await deleteUserById(id);
};

export { getUsers, getUserById, saveUser, modifyUserById, removeUserById };
