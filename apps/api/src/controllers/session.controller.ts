import type { FastifyReply, FastifyRequest } from "fastify";
import { createAnonymousSession } from "../services/session.service";

export async function createSessionController(
  _request: FastifyRequest,
  reply: FastifyReply
) {
  const session = await createAnonymousSession();

  return reply.status(201).send({
    success: true,
    data: session,
  });
}


