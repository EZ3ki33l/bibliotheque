"use server";

import { RequireAdmin } from "@/lib/admin";
import { ActionState } from "@/types";
import { revalidatePath } from "next/cache";
import { deleteStackSchema, stackSchema, updateStackSchema } from "./schema";
import z from "zod";
import { prisma } from "@/lib/prisma";
import { isUniqueConflict } from "@/lib/utils";

function revalidateStacks() {
  revalidatePath("/admin/stacks");
  revalidatePath("/stacks");
  revalidatePath("/");
}

export async function createStack(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await RequireAdmin();

  const parsed = stackSchema.safeParse({
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description") ?? "",
    position: formData.get("position") || 0,
  });

  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  try {
    const stack = await prisma.stack.create({ data: parsed.data });
    revalidateStacks();
    return { id: stack.id, slug: stack.slug };
  } catch (error) {
    if (isUniqueConflict(error)) {
      return { fieldErrors: { slug: ["Ce slug est déjà utilisé"] } };
    }
    return { error: "Impossible de créer le stack" };
  }
}

export async function updateStack(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await RequireAdmin();

  const parsed = updateStackSchema.safeParse({
    id: formData.get("id"),
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
    const stack = await prisma.stack.update({ where: { id }, data });
    revalidateStacks();
    return { id: stack.id, slug: stack.slug };
  } catch (error) {
    if (isUniqueConflict(error)) {
      return { fieldErrors: { slug: ["Ce slug est déjà utilisé"] } };
    }
    return { error: "Impossible de mettre à jour le stack" };
  }
}

export async function deleteStack(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await RequireAdmin();
  const parsed = deleteStackSchema.safeParse({ id: formData.get("id") });
  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }
  try {
    await prisma.stack.delete({ where: { id: parsed.data.id } });
    revalidateStacks();
    return {};
  } catch {
    return { error: "Impossible de supprimer le stack" };
  }
}
