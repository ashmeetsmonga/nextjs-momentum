import prisma from "@/app/libs/prisma";
import { errorHandler } from "@/app/utils/errorHandler";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const userId = "67756d4ef0e0eded7ddb2171";
    const projects = await prisma.project.findMany({ where: { ownerId: userId } });
    return NextResponse.json(projects);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(req: Request, res: Response) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const projectId = searchParams.get("projectId");

    if (!projectId) throw "Invalid Project ID";
    const tasks = await prisma.task.deleteMany({ where: { projectId: projectId } });
    const project = await prisma.project.delete({ where: { id: projectId } });
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    return errorHandler(error);
  }
}
