import { apiRequest } from "./api.client";

export type SessionResponse = { success: boolean; data: { sessionId: string } };

export function createSession() {
  return apiRequest<SessionResponse>("/api/v1/sessions", { method: "POST", body: JSON.stringify({}) });
}
