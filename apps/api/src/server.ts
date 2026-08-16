import { buildApp } from "./app";

const app = buildApp();

const start = async () => {
  try {
    await (await app).listen({
      port: Number(process.env.PORT) || 4000,
      host: "0.0.0.0"
    });
  } catch (error) {
    (await app).log.error(error);
    process.exit(1);
  }
};

start();