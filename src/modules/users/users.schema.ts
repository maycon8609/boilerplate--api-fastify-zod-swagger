import z from "zod";

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;

export const listUsersSchema = {
  tags: ["users"],
  description: "List users",
  response: {
    200: z.array(UserSchema),
  },
};

export const createUserSchema = {
  tags: ["users"],
  description: "Create a new user",
  body: z.object({
    name: z.string(),
    email: z.string().email(),
  }),
  response: {
    201: z.null().describe("User created"),
  },
};
