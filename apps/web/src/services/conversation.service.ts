import { apiRequest } from "./api.client";

export type ConversationResponse = { success: boolean; data: { conversation: { id: string } } };

export function createConversation(sessionId: string) {
  return apiRequest<ConversationResponse>("/api/v1/conversations", {
    method: "POST",
    body: JSON.stringify({ sessionId }),
  });
}

export function getConversation(conversationId: string) {
  return apiRequest(`/api/v1/conversations/${conversationId}`);
}
