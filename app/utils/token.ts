import { SignJWT, jwtVerify } from "jose";
import { CustomError } from "./CustomError";

export const createToken = async (payload: { id: string; email: string }) => {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const alg = "HS256";
    return new SignJWT(payload).setProtectedHeader({ alg }).setExpirationTime("1d").setIssuedAt().setSubject(payload.id).sign(secret);
  } catch (error) {
    throw error;
  }
};

export const decodeToken = async <T>(token: string): Promise<T> => {
  try {
    const data = (await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET))).payload as T;
    return data;
  } catch (e) {
    throw new CustomError("Token verification failed", 500, "INVALID_TOKEN");
  }
};
