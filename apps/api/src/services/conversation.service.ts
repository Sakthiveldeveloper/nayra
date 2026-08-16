import { prisma } from "../lib/prisma";

export async function createConversation(sessionId: string) {
  const session = await prisma.session.findUnique({
    where: {
      id: sessionId,
    },
  });

  if (!session) {
    throw new Error("Session not found");
  }

  if (session.status !== "ACTIVE") {
    throw new Error("Session is not active");
  }

  const conversation = await prisma.conversation.create({
    data: {
      sessionId,
    },
  });

  return {
    conversationId: conversation.id,
    sessionId: conversation.sessionId,
  };
}

export async function getConversation(conversationId: string) {
  const conversation = await prisma.conversation.findUnique({
    where: {
      id: conversationId,
    },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  if (!conversation) {
    throw new Error("Conversation not found");
  }

  return conversation;
}