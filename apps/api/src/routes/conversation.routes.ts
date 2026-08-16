import type { FastifyInstance } from "fastify";
import { createConversationController, getConversationController } from "../controllers/conversation.controller";

export async function conversationRoutes(app: FastifyInstance) {
  app.post(
    "/api/v1/conversations",
    createConversationController
  );

  app.get(
    "/api/v1/conversations/:conversationId",
    getConversationController
  );
}

