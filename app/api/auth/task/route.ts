import prisma from "@/app/libs/prisma";
import { errorHandler } from "@/app/utils/errorHandler";
import { decodeToken } from "@/app/utils/token";
import { createTaskSchema } from "@/app/utils/zodSchema";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const parsedBody = createTaskSchema.parse(body);
    const { title, description, projectId } = parsedBody;

    const token = req.headers.get("authorization")?.split(" ")[1];
    const payload: TokenPayload = await decodeToken(token as string);

    const task = await prisma.task.create({ data: { title, description, projectId, creatorId: payload.id } });
    return NextResponse.json({ message: "Task created successfully", taskId: task.id }, { status: 201 });
  } catch (error) {
    return errorHandler(error);
  }
}
