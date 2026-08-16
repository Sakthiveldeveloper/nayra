import { apiRequest } from "./api.client";

export function sendMessage(conversationId: string, content: string) {
  return apiRequest(`/api/v1/conversations/${conversationId}/messages`, {
    method: "POST",
    body: JSON.stringify({ content }),
  });
}

export function getMessages(conversationId: string) {
  return apiRequest(`/api/v1/conversations/${conversationId}/messages`);
}
