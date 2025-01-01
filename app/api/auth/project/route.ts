import prisma from "@/app/libs/prisma";
import { decodeToken } from "@/app/utils/token";
import { CreateProjectBody, createProjectSchema } from "@/app/utils/zodSchema";
import { handleApiRequest } from "@/app/utils/apiHelper";

const createProjectLogic = async (parsedBody: CreateProjectBody) => {
  const { name, description, token } = parsedBody;
  const payload: TokenPayload = await decodeToken(token);
  const project = await prisma.project.create({
    data: { name, description, ownerId: payload.id },
  });
  const response = {
    message: "Project created successfully",
    projectId: project.id,
  };
  return response;
};

export async function POST(req: Request, res: Response) {
  return handleApiRequest(req, res, createProjectSchema, createProjectLogic);
}
