import { TaskPriority, TaskStatus } from "@prisma/client";
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

export const createProjectSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

export const editProjectSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  projectId: z.string().min(1, "ProjectId is required"),
});

export const TaskStatusSchema = z.enum([TaskStatus.TODO, TaskStatus.IN_PROGRESS, TaskStatus.REVIEW, TaskStatus.DONE]);
export const PriorityStatusSchema = z.enum([TaskPriority.LOW, TaskPriority.MEDIUM, TaskPriority.HIGH, TaskPriority.CRITICAL]);

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  projectId: z.string(),
  status: TaskStatusSchema,
  priority: PriorityStatusSchema,
});

export const updateTaskSchema = createTaskSchema
  .extend({
    taskId: z.string(),
  })
  .omit({ projectId: true });
