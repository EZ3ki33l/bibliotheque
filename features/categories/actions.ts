"use server";

import { RequireAdmin } from "@/lib/admin";
import { ActionState } from "@/types";
import { revalidatePath } from "next/cache";
import { categorySchema, updateCategorySchema } from "./schema";
import z from "zod";
import { prisma } from "@/lib/prisma";
import { isUniqueConflict } from "@/lib/utils";

function revalidateCategories() {
  revalidatePath("/admin/categories");
  revalidatePath("/admin/stacks");
  revalidatePath("/stacks");
}

export async function createCategory(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await RequireAdmin();

  const parsed = categorySchema.safeParse({
    stackId: formData.get("stackId"),
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description") ?? "",
    position: formData.get("position") || 0,
  });

  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  try {
    const category = await prisma.category.create({ data: parsed.data });
    revalidateCategories();
    return { id: category.id, slug: category.slug };
  } catch (error) {
    if (isUniqueConflict(error)) {
      return { fieldErrors: { slug: ["Ce slug existe déjà dans ce stack"] } };
    }
  }
  return { error: "Impossible de créer la catégorie" };
}

export async function updateCategory(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await RequireAdmin();
  const parsed = updateCategorySchema.safeParse({
    id: formData.get("id"),
    stackId: formData.get("stackId"),
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description") ?? "",
    position: formData.get("position") || 0,
  });
  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }
  const { id, ...data } = parsed.data;
  try {
    const category = await prisma.category.update({ where: { id }, data });
    revalidateCategories();
    return { id: category.id, slug: category.slug };
  } catch (error) {
    if (isUniqueConflict(error)) {
      return { fieldErrors: { slug: ["Ce slug existe déjà dans ce stack"] } };
    }
    return { error: "Impossible de mettre à jour la catégorie" };
  }
}
