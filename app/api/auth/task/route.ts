import prisma from "@/app/libs/prisma";
import { errorHandler } from "@/app/utils/errorHandler";
import { decodeToken } from "@/app/utils/token";
import { createTaskSchema } from "@/app/utils/zodSchema";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const parsedBody = createTaskSchema.parse(body);
    const { title, description, projectId, status, priority } = parsedBody;

    // const token = req.headers.get("authorization")?.split(" ")[1];
    // const payload: TokenPayload = await decodeToken(token as string);

    const task = await prisma.task.create({ data: { title, description, projectId, status, priority, creatorId: "67756d4ef0e0eded7ddb2171", assigneeId: "67756d4ef0e0eded7ddb2171" } });
    return NextResponse.json({ message: "Task created successfully", taskId: task.id }, { status: 201 });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const taskId = searchParams.get("taskId");

    if (!taskId) return NextResponse.json({ message: "Task not found" }, { status: 404 });

    // const token = req.headers.get("authorization")?.split(" ")[1];
    // const payload: TokenPayload = await decodeToken(token as string);

    const task = await prisma.task.findUnique({ where: { id: taskId, creatorId: "67756d4ef0e0eded7ddb2171" } });

    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return errorHandler(error);
  }
}
