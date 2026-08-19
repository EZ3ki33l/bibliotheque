"use server";

import { auth } from "@/lib/auth";
import { signInSchema, signUpSchema } from "./schema";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

export type AuthState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  userName?: string;
};

export async function signUp(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const parsed = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }
  try {
    const result = await auth.api.signUpEmail({
      body: parsed.data,
      headers: await headers(),
    });

    if (!result?.user) {
      return { error: "Impossible de créer le compte" };
    }
    revalidatePath("/", "layout");
    return { userName: result.user.name };
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Impossible de créer le compte",
    };
  }
}

export async function signIn(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const parsed = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }

  try {
    const result = await auth.api.signInEmail({
      body: parsed.data,
      headers: await headers(),
    });
    revalidatePath("/", "layout");
    return { userName: result.user.name };
  } catch {
    return { error: "Email ou mot de passe incorrect" };
  }
}
