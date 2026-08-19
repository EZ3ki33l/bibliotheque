import { z } from "zod";
import { SlugSchema } from "../stacks/schema";

export const sandpackFilesSchema = z.record(z.string(), z.string());

export const entrySchema = z.object({
  categoryId: z.uuid("Catégorie invalide"),
  title: z.string().min(2, "Le titre est requis"),
  slug: SlugSchema,
  summary: z.string().default(""),
  bodyMdx: z.string().default(""),
  kind: z.enum(["FUNCTION", "COMPONENT", "CONCEPT"], "Type invalide"),
  difficulty: z.enum(
    ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
    "Niveau invalide",
  ),
  tags: z.array(z.string().min(1)).default([]),
  published: z.boolean(),
  position: z.coerce.number().int().min(0, "Position invalide"),
  template: z.string().min(1).default("react-ts"),
  files: sandpackFilesSchema,
  dependencies: sandpackFilesSchema.optional(),
});

export const updateEntrySchema = entrySchema.extend({
  id: z.uuid("Id invalide"),
});

export const deleteEntrySchema = z.object({
  id: z.uuid("Id invalide"),
});
