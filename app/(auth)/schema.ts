import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.email("Email invalide"),
  password: z.string().min(8, "8 caractères minimum"),
});

export const signInSchema = z.object({
  email: z.email("Email invalide"),
  password: z.string().min(1, "Mot de passe requis"),
});
