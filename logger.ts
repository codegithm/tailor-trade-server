import { PrismaClient } from "./generated/prisma";
import type { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

const loggerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();
  const { method, originalUrl, body } = req;
  let userId = null;
  // Use (req as any).user to avoid TS error if user is not defined on Request
  const anyReq = req as any;
  if (anyReq.user && anyReq.user.id) userId = anyReq.user.id;

  // Capture response data
  let oldJson = res.json;
  let oldSend = res.send;
  let responseBody: any = null;
  let error: any = null;

  res.json = function (data: any) {
    responseBody = data;
    return oldJson.call(this, data);
  };
  res.send = function (data: any) {
    responseBody = data;
    return oldSend.call(this, data);
  };

  res.on("finish", async () => {
    try {
      await prisma.log.create({
        data: {
          userId,
          method,
          route: originalUrl,
          status: res.statusCode,
          requestBody: JSON.stringify(body),
          responseBody: responseBody ? JSON.stringify(responseBody) : null,
          error: error ? JSON.stringify(error) : null,
        },
      });
    } catch (err) {
      // Fallback: log to console if DB logging fails
      console.error("Failed to log HTTP action:", err);
    }
  });

  try {
    next();
  } catch (err) {
    error = err;
    next(err);
  }
};

export default loggerMiddleware;
