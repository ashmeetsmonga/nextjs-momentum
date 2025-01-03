"use server";
import { revalidatePath } from "next/cache";

const clearCachesByServerAction = async (path: string, type: "layout" | "page" | undefined) => {
  try {
    if (path) {
      if (type) revalidatePath(path, type);
      else revalidatePath(path);
    } else {
      revalidatePath("/");
      revalidatePath("/[lang]");
    }
  } catch (error) {
    console.error("clearCachesByServerAction=> ", error);
  }
};
export default clearCachesByServerAction;
