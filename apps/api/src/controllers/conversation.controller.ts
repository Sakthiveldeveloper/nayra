import type { FastifyReply, FastifyRequest } from "fastify";
import { createConversation , getConversation} from "../services/conversation.service";

interface CreateConversationBody {
  sessionId: string;
}

export async function createConversationController(
  request: FastifyRequest<{
    Body: CreateConversationBody;
  }>,
  reply: FastifyReply
) {
  const { sessionId } = request.body;

  if (!sessionId) {
    return reply.status(400).send({
      success: false,
      error: "sessionId is required",
    });
  }

  try {
    const conversation = await createConversation(sessionId);

    return reply.status(201).send({
      success: true,
      data: conversation,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create conversation";

    return reply.status(400).send({
      success: false,
      error: message,
    });
  }
}

export async function getConversationController(
  request: FastifyRequest<{
    Params: {
      conversationId: string;
    };
  }>,
  reply: FastifyReply
) {
  const { conversationId } = request.params;

  try {
    const conversation = await getConversation(conversationId);

    return reply.status(200).send({
      success: true,
      data: conversation,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Conversation not found";

    return reply.status(404).send({
      success: false,
      error: message,
    });
  }
}