import z from "zod";

export const SlugSchema = z
  .string()
  .min(1, "Le slug est requis")
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug : minuscules, chiffres et tirets");

export const stackSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  slug: SlugSchema,
  description: z.string().default(""),
  position: z.coerce.number().int().min(0, "Position invalide"),
});

export const updateStackSchema = stackSchema.extend({
  id: z.uuid("Id invalide"),
});

export const deleteStackSchema = z.object({
  id: z.uuid("Id invalide"),
});
