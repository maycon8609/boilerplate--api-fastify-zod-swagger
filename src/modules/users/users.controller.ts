import { randomUUID } from "crypto";
import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "./users.schema";

let users: User[] = [];

export const getUsers = async () => users;

export const createUser = async (
  request: FastifyRequest<{ Body: { name: string; email: string } }>,
  reply: FastifyReply
) => {
  const { name, email } = request.body;

  users.push({
    id: randomUUID(),
    name,
    email,
  });

  return reply.status(201).send();
};
