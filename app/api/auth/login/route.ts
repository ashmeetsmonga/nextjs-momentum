import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prisma";
import { createToken } from "@/app/utils/token";
import { LoginRequestBody, loginSchema } from "@/app/utils/zodSchema";
import { CustomError } from "@/app/utils/CustomError";
import { handleApiRequest } from "@/app/utils/apiHelper";

async function loginLogic(parsedBody: LoginRequestBody) {
  const { email, password } = parsedBody;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new CustomError("User email not found", 404, "USER_NOT_FOUND");

  const isPasswordCorrect = bcrypt.compareSync(password, user.password as string);
  if (!isPasswordCorrect) throw new CustomError("Invalid password", 404, "INVALID_PASSWORD");

  const token = await createToken({ id: user.id, email: user.email! });

  const response = {
    name: user.name,
    email: user.email,
    id: user.id,
    token,
  };

  return response;
}

export async function POST(req: Request, res: Response) {
  return handleApiRequest(req, res, loginSchema, loginLogic);
}
