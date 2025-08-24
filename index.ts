import "dotenv/config";
import express from "express";
import cors from "cors";
import authRouter from "./auth";
import chatRouter from "./chat";
import dashboardRouter from "./dashboard";
import designRouter from "./design";
import streamRoutes from "./stream";
import bodygramRouter from "./bodygram";
import loggerMiddleware from "./logger";
import { PrismaClient } from "./generated/prisma";
import setupSwagger from "./swagger";

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});

app.use("/auth", authRouter);
app.use("/chat", chatRouter);
app.use("/dashboard", dashboardRouter);
app.use("/design", designRouter);
app.use("/api/stream", streamRoutes);
app.use("/bodygram", bodygramRouter);

// Swagger UI
setupSwagger(app);

const prisma = new PrismaClient();

app.post("/api/log", async (req, res) => {
  try {
    const payload = req.body || {};
    const method = String(payload.method || req.method || "POST");
    const route = String(payload.route || req.path || "/unknown");
    const status = Number(payload.status || 0);
    const requestBody = payload.requestBody
      ? JSON.stringify(payload.requestBody)
      : null;
    const responseBody = payload.responseBody
      ? JSON.stringify(payload.responseBody)
      : null;
    const error = payload.error ? JSON.stringify(payload.error) : null;

    await prisma.log.create({
      data: {
        method,
        route,
        status,
        requestBody,
        responseBody,
        error,
      },
    });
    res.status(201).json({ message: "Log entry created" });
  } catch (error) {
    console.error("Failed to create log entry:", error);
    return res
      .status(500)
      .json({ error: String(error), message: "Failed to create log entry" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
