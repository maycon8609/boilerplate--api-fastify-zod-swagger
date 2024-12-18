import { fastify } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { usersRoutes } from "./modules/users/users.routes";
import { setupCors } from "./plugins/cors";
import { setupSwagger } from "./plugins/swagger";
import { setupTypeProvider } from "./plugins/type-provider";

export const createApp = () => {
  const app = fastify({}).withTypeProvider<ZodTypeProvider>();

  setupTypeProvider(app);
  setupCors(app);
  setupSwagger(app);

  app.register(usersRoutes);

  return app;
};
