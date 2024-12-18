import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { FastifyInstance } from "fastify";
import { jsonSchemaTransform } from "fastify-type-provider-zod";

export const setupSwagger = (app: FastifyInstance) => {
  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "API - Swagger",
        description: "Swagger documentation",
        version: "1.0.0",
      },
    },
    transform: jsonSchemaTransform,
  });

  app.register(fastifySwaggerUi, {
    routePrefix: "/docs",
  });
};
