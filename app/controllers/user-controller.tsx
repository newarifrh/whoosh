import { Request, Response } from "express";
import {
  getUsers,
  getUserById,
  saveUser,
  modifyUserById,
  removeUserById,
} from "../services/user-service";
import { handlerError } from "../utils/handle-error";
import { presentUser, presentUsers } from "../presenter/user-presenter";
import { errorResponse, successResponse } from "../utils/handle-response";

const index = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();

    const formattedUsers = presentUsers(users);

    return successResponse(
      res,
      formattedUsers,
      "Users retrieved successfully."
    );
  } catch (e) {
    const error = handlerError(e);

    return errorResponse(res, error.message, error.httpCode);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await getUserById(id);

    const formattedUsers = presentUser(user);

    return successResponse(
      res,
      formattedUsers,
      "User detail retrieved successfully."
    );
  } catch (e) {
    const error = handlerError(e);

    return errorResponse(res, error.message, error.httpCode);
  }
};

const store = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await saveUser({ name, email });

    const formattedUsers = presentUser(user);

    return successResponse(
      res,
      formattedUsers,
      "User detail retrieved successfully.",
      201
    );
  } catch (e) {
    const error = handlerError(e);

    return errorResponse(res, error.message, error.httpCode);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;

    const user = await modifyUserById(id, { name, email });

    const formattedUsers = presentUser(user);

    return successResponse(
      res,
      formattedUsers,
      "User detail retrieved successfully."
    );
  } catch (e) {
    const error = handlerError(e);

    return errorResponse(res, error.message, error.httpCode);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await removeUserById(id);

    return successResponse(res, null, "", 204);
  } catch (e) {
    const error = handlerError(e);

    return errorResponse(res, error.message, error.httpCode);
  }
};

export { index, show, store, update, destroy };
