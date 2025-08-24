import swaggerUi from "swagger-ui-express";
import type { Express } from "express";

const basicSpec = {
  openapi: "3.0.0",
  info: { title: "Tailor Trade Server API", version: "1.0.0" },
  paths: {
    "/": {
      get: {
        summary: "Health check",
        responses: { "200": { description: "OK" } },
      },
    },
  },
} as const;

export default function setupSwagger(app: Express) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(basicSpec as any));
}
