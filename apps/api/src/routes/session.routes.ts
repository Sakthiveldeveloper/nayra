import type { FastifyInstance } from "fastify";
import { createSessionController, } from "../controllers/session.controller";

export async function sessionRoutes(app: FastifyInstance) {
  app.post("/api/v1/sessions", createSessionController);
}