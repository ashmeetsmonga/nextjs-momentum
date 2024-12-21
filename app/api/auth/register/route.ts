import bcrypt from "bcrypt";
import prisma from "@/app/libs/prisma";
import { createToken } from "@/app/utils/token";
import { RegisterRequestBody, registerSchema } from "@/app/utils/zodSchema";
import { handleApiRequest } from "@/app/utils/apiHelper";
import { CustomError } from "@/app/utils/CustomError";

const registerLogic = async (parsedBody: RegisterRequestBody) => {
  const { name, email, password } = parsedBody;

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) throw new CustomError("User already exists", 400, "USER_ALREADY_EXISTS");

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  const token = await createToken({ id: newUser.id, email: newUser.email! });
  const response = {
    name: newUser.name,
    email: newUser.email,
    id: newUser.id,
    token,
  };

  return response;
};

export async function POST(req: Request, res: Response) {
  return handleApiRequest(req, res, registerSchema, registerLogic);
}
