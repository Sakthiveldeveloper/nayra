import type { FastifyReply, FastifyRequest } from "fastify";
import { sendMessage } from "../services/message.service";

interface SendMessageBody {
  content: string;
}

interface SendMessageParams {
  conversationId: string;
}

export async function sendMessageController(
  request: FastifyRequest<{
    Params: SendMessageParams;
    Body: SendMessageBody;
  }>,
  reply: FastifyReply
) {
  const { conversationId } = request.params;
  const { content } = request.body;

  if (!content || !content.trim()) {
    return reply.status(400).send({
      success: false,
      error: "Message content is required",
    });
  }

  try {
    const result = await sendMessage({
      conversationId,
      content: content.trim(),
    });

    return reply.status(201).send({
      success: true,
      data: result,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to send message";

    return reply.status(404).send({
      success: false,
      error: message,
    });
  }
}

import { prisma } from "../lib/prisma";

export async function getMessagesController(
  request: FastifyRequest<{
    Params: {
      conversationId: string;
    };
  }>,
  reply: FastifyReply
) {
  const { conversationId } = request.params;

  const conversation = await prisma.conversation.findUnique({
    where: {
      id: conversationId,
    },
  });

  if (!conversation) {
    return reply.status(404).send({
      success: false,
      error: "Conversation not found",
    });
  }

  const messages = await prisma.message.findMany({
    where: {
      conversationId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return reply.status(200).send({
    success: true,
    data: {
      conversationId,
      messages,
    },
  });
}