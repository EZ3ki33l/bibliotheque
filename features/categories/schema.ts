import z from "zod";
import { SlugSchema } from "../stacks/schema";

export const categorySchema = z.object({
  stackId: z.uuid("Stack invalide"),
  name: z.string().min(2, "Le nom est requis"),
  slug: SlugSchema,
  description: z.string().default(""),
  position: z.coerce.number().int().min(0, "Position invalide"),
});

export const updateCategorySchema = categorySchema.extend({
  id: z.uuid("Id invalide"),
});

export const deleteCategorySchema = z.object({
  id: z.uuid("Id invalide"),
});
