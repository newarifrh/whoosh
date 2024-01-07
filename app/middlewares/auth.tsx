import { Request, Response, NextFunction } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers["api-key"];
  if (apiKey && apiKey === process.env.API_KEY) {
    next();
  } else {
    res.status(401).json({
      data: null,
      message: "Unauthorized",
    });
  }
};

export { authMiddleware };
