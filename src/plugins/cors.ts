import { fastifyCors } from "@fastify/cors";
import { FastifyInstance } from "fastify";

export const setupCors = (app: FastifyInstance) => {
  app.register(fastifyCors, {
    origin: "*",
  });
};
