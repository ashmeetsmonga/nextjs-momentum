import { NextResponse } from "next/server";
import { z } from "zod";
import { CustomError } from "./CustomError";

export type ApiHandler = (req: Request, res: Response) => Promise<void>;

export const handleApiRequest = async (req: Request, res: Response, schema: z.ZodSchema<any>, logic: (parsedBody: any) => Promise<any>) => {
  try {
    const body = await req.json();
    const parsedBody = schema.parse(body);

    const result = await logic(parsedBody);

    const response = NextResponse.json(result);
    return response;
  } catch (error) {
    console.log("Ashmeet error", error);
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));
      return NextResponse.json({ error: "Validation failed", details: formattedErrors }, { status: 400 });
    }

    if (error instanceof CustomError) return NextResponse.json({ error: error.message }, { status: error.statusCode });

    return NextResponse.json({ error }, { status: 500 });
  }
};
