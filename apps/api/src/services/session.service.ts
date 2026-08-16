import crypto from "node:crypto";
import { prisma } from "../lib/prisma";

export async function createAnonymousSession() {
  const anonymousToken = crypto.randomBytes(32).toString("hex");

  const expiresAt = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  );

  const session = await prisma.session.create({
    data: {
      anonymousToken,
      expiresAt,
    },
  });

  return {
    sessionId: session.id,
    expiresAt: session.expiresAt,
  };
}
