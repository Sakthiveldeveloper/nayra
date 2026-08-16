import { prisma } from "../lib/prisma";

interface SendMessageInput {
  conversationId: string;
  content: string;
}

function generateInitialResponse(content: string) {
  const normalizedContent = content.toLowerCase();

  if (
    normalizedContent.includes("danger") ||
    normalizedContent.includes("threat") ||
    normalizedContent.includes("hurt") ||
    normalizedContent.includes("unsafe")
  ) {
    return "I'm sorry you're dealing with this. Your safety comes first. If you are in immediate danger, please seek help from a trusted person or appropriate emergency service.";
  }

  return "I'm here with you. You can tell me what is happening at your own pace. I'll help you understand the situation and think through possible next steps.";
}

export async function sendMessage({
  conversationId,
  content,
}: SendMessageInput) {
  const conversation = await prisma.conversation.findUnique({
    where: {
      id: conversationId,
    },
  });

  if (!conversation) {
    throw new Error("Conversation not found");
  }

  if (conversation.status !== "ACTIVE") {
    throw new Error("Conversation is not active");
  }

  const userMessage = await prisma.message.create({
    data: {
      conversationId,
      role: "USER",
      content,
    },
  });

  const responseContent = generateInitialResponse(content);

  const assistantMessage = await prisma.message.create({
    data: {
      conversationId,
      role: "ASSISTANT",
      content: responseContent,
    },
  });

  return {
    userMessage,
    assistantMessage,
  };
}