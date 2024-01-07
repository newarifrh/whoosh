import { Prisma } from "@prisma/client";
import { CustomError } from "../types/error";

const handlerError = (e: unknown) => {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    return {
      httpCode: 400,
      message: e.message,
    };
  } else if (e instanceof CustomError) {
    return {
      httpCode: e.httpCode,
      message: e.message,
    };
  } else {
    return {
      httpCode: 400,
      message: "An unexpected error occurred.",
    };
  }
};

export { handlerError };
