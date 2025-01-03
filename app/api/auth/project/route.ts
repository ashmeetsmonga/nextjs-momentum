import prisma from "@/app/libs/prisma";
import { decodeToken } from "@/app/utils/token";
import { createProjectSchema, editProjectSchema } from "@/app/utils/zodSchema";
import { NextResponse } from "next/server";
import { errorHandler } from "@/app/utils/errorHandler";
import { CustomError } from "@/app/utils/CustomError";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const parsedBody = createProjectSchema.parse(body);
    const { name, description } = parsedBody;

    // const token = req.headers.get("authorization")?.split(" ")[1];
    // const payload: TokenPayload = await decodeToken(token as string);

    const project = await prisma.project.create({
      data: { name, description, ownerId: "67756d4ef0e0eded7ddb2171" },
    });
    return NextResponse.json({ message: "Project created successfully", projectId: project.id }, { status: 201 });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const projectId = searchParams.get("projectId");

    // const token = req.headers.get("authorization")?.split(" ")[1];
    // const payload: TokenPayload = await decodeToken(token as string);

    let data;
    if (projectId)
      data = await prisma.project.findUnique({
        where: { id: projectId, ownerId: "67756d4ef0e0eded7ddb2171" },
        include: { tasks: { include: { creator: { select: { name: true } } } }, owner: { select: { name: true } } },
      });
    else data = await prisma.project.findMany({ where: { ownerId: "67756d4ef0e0eded7ddb2171" } });

    if (!data) throw new CustomError("Record not found", 404, "NOT_FOUND");
    return NextResponse.json(data);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PUT(req: Request, res: Response) {
  try {
    const body = await req.json();
    const parsedBody = editProjectSchema.parse(body);
    const { name, description, projectId } = parsedBody;

    const project = await prisma.project.update({ where: { id: projectId }, data: { name, description } });
    return NextResponse.json({ message: "Project updated successfully" });
  } catch (error) {
    errorHandler(error);
  }
}
