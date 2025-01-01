import { NextResponse } from "next/server";
import { z } from "zod";
import { CustomError } from "./CustomError";

export const errorHandler = (error: any) => {
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
};
