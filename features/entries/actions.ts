"use server";

import { revalidatePath } from "next/cache";
import { RequireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { isUniqueConflict, parseJsonRecord } from "@/lib/utils";
import type { ActionState } from "@/types";
import { deleteEntrySchema, entrySchema, updateEntrySchema } from "./schema";
import z from "zod";

function tagsFromForm(value: FormDataEntryValue | null) {
  if (typeof value !== "string" || !value.trim()) return [];
  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function revalidateEntries(slug?: string) {
  revalidatePath("/admin/entries");
  revalidatePath("/browse");
  revalidatePath("/stacks");
  if (slug) revalidatePath(`/entries/${slug}`);
}

function readEntryFields(formData: FormData) {
  const files = parseJsonRecord(formData.get("files"));
  const dependencies = parseJsonRecord(formData.get("dependencies"));

  if (!files.ok) {
    return { error: { files: [files.error] } as Record<string, string[]> };
  }
  if (!dependencies.ok) {
    return {
      error: { dependencies: [dependencies.error] } as Record<string, string[]>,
    };
  }

  return {
    data: {
      categoryId: formData.get("categoryId"),
      title: formData.get("title"),
      slug: formData.get("slug"),
      summary: formData.get("summary") ?? "",
      bodyMdx: formData.get("bodyMdx") ?? "",
      kind: formData.get("kind"),
      difficulty: formData.get("difficulty"),
      tags: tagsFromForm(formData.get("tags")),
      published: formData.get("published") === "on",
      position: formData.get("position") || 0,
      template: formData.get("template") || "react-ts",
      files: files.data ?? {},
      dependencies: dependencies.data,
    },
  };
}

export async function createEntry(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await RequireAdmin();

  const fields = readEntryFields(formData);
  if ("error" in fields) return { fieldErrors: fields.error };

  const parsed = entrySchema.safeParse(fields.data);
  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  try {
    const entry = await prisma.entry.create({ data: parsed.data });
    revalidateEntries(entry.slug);
    return { id: entry.id, slug: entry.slug };
  } catch (error) {
    if (isUniqueConflict(error)) {
      return { fieldErrors: { slug: ["Ce slug est déjà utilisé"] } };
    }
    return { error: "Impossible de créer la fiche" };
  }
}

export async function updateEntry(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await RequireAdmin();

  const fields = readEntryFields(formData);
  if ("error" in fields) return { fieldErrors: fields.error };

  const parsed = updateEntrySchema.safeParse({
    id: formData.get("id"),
    ...fields.data,
  });
  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  const { id, ...data } = parsed.data;

  try {
    const entry = await prisma.entry.update({ where: { id }, data });
    revalidateEntries(entry.slug);
    return { id: entry.id, slug: entry.slug };
  } catch (error) {
    if (isUniqueConflict(error)) {
      return { fieldErrors: { slug: ["Ce slug est déjà utilisé"] } };
    }
    return { error: "Impossible de mettre à jour la fiche" };
  }
}

export async function deleteEntry(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await RequireAdmin();

  const parsed = deleteEntrySchema.safeParse({ id: formData.get("id") });
  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  try {
    const entry = await prisma.entry.delete({
      where: { id: parsed.data.id },
    });
    revalidateEntries(entry.slug);
    return {};
  } catch {
    return { error: "Impossible de supprimer la fiche" };
  }
}
