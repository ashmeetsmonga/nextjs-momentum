import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, { message: "Password must be atleast 6 chars long" }),
});

export type RegisterRequestBody = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, { message: "Password must be atleast 6 chars long" }),
});

export type LoginRequestBody = z.infer<typeof loginSchema>;