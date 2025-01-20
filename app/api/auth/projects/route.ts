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
