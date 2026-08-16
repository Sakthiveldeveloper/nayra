import type { FastifyInstance } from "fastify";
import { sendMessageController, getMessagesController } from "../controllers/message.controller";

export async function messageRoutes(app: FastifyInstance) {
  app.post(
    "/api/v1/conversations/:conversationId/messages",
    sendMessageController
  );

  app.get(
    "/api/v1/conversations/:conversationId/messages",
    getMessagesController
  );
}