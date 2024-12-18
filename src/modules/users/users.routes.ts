import { FatifyTypedInstance } from "../../types";
import { createUser, getUsers } from "./users.controller";
import { createUserSchema, listUsersSchema } from "./users.schema";

export async function usersRoutes(app: FatifyTypedInstance) {
  app.get("/users", { schema: listUsersSchema }, getUsers);
  app.post("/users", { schema: createUserSchema }, createUser);
}
