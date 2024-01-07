import { Request, Response } from "express";
import {
  getUsers,
  getUserById,
  saveUser,
  modifyUserById,
  removeUserById,
} from "../services/user-service";
import { handlerError } from "../utils/handle-error";

const index = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();

    res.status(200).json({
      data: users,
      message: "Users retrieved successfully.",
    });
  } catch (e) {
    const error = handlerError(e);

    return res.status(error.httpCode).json({
      data: null,
      message: error.message,
    });
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await getUserById(id);

    res.status(200).json({
      data: user,
      message: "User detail retrieved successfully.",
    });
  } catch (e) {
    const error = handlerError(e);

    return res.status(error.httpCode).json({
      data: null,
      message: error.message,
    });
  }
};

const store = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await saveUser({ name, email });

    res.status(201).json({
      data: user,
      message: "User created successfully.",
    });
  } catch (e) {
    const error = handlerError(e);

    return res.status(error.httpCode).json({
      data: null,
      message: error.message,
    });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;

    const user = await modifyUserById(id, { name, email });

    return res.status(200).json({
      data: user,
      message: "User updated successfully.",
    });
  } catch (e) {
    const error = handlerError(e);

    return res.status(error.httpCode).json({
      data: null,
      message: error.message,
    });
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await removeUserById(id);

    return res.status(204).json();
  } catch (e) {
    const error = handlerError(e);

    return res.status(error.httpCode).json({
      data: null,
      message: error.message,
    });
  }
};

export { index, show, store, update, destroy };
