import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { sessionRoutes } from "./routes/session.routes";
import { conversationRoutes } from "./routes/conversation.routes";
import { messageRoutes } from "./routes/message.routes";

export async function buildApp() {
  const app = Fastify({
    logger: true
  });

  app.register(cors);
  app.register(helmet);
  
  app.get("/", async () => {
    return {
      success: true,
      data: {
        "description": "Nayra API is a RESTful API for the Nayra project.",
        service: "nayra-api",
        status: "ok",
        version: "0.1.0",
        devloper: "Nayra",
        "developer-email": "nayra@gmail.com",
        "developer-website": "https://nayra.com",
        "developer-github": "https://github.com/nayra",
        "developer-linkedin": "https://linkedin.com/in/nayra",
        "developer-twitter": "https://twitter.com/nayra",
        "developer-facebook": "https://facebook.com/nayra",
        "developer-instagram": "https://instagram.com/nayra",
        "developer-youtube": "https://youtube.com/nayra",
      }
    };
  });

  app.get("/health", async () => {
    return {
      success: true,
      data: {
        service: "nayra-api",
        status: "ok",
        version: "0.1.0",
        "check-health-endpoint": "http://localhost:4000/health"
      }
    };
  });

  await app.register(sessionRoutes);
  await app.register(conversationRoutes);
  await app.register(messageRoutes);
  return app;
}