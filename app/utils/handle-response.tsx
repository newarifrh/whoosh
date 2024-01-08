import { Response } from "express";

interface APIResponse {
  data: unknown;
  message: string;
}

export const successResponse = (
  res: Response,
  data: unknown,
  message: string,
  status: number = 200
) => {
  const response: APIResponse = {
    data: data,
    message: message,
  };

  return res.status(status).json(response);
};

export const errorResponse = (
  res: Response,
  message: string,
  status: number = 400
) => {
  const response: APIResponse = {
    data: null,
    message: message,
  };

  return res.status(status).json(response);
};
