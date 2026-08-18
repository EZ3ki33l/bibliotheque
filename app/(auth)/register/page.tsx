"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { toast } from "@heroui/react";
import { signUp } from "../actions";
import { RegisteredButton } from "@/components/ui/ToastButton";
import { AuthField } from "@/components/auth/AuthField";

export default function RegisterPage() {
  const [state, action] = useActionState(signUp, {});

  useEffect(() => {
    if (state.error) toast.danger(state.error);
  }, [state]);

  return (
    <form action={action} className="flex flex-col">
      <h1 className="mb-6 text-center text-2xl font-semibold tracking-tight">
        Créer un compte
      </h1>

      <AuthField
        name="name"
        label="Nom"
        autoComplete="name"
        required
        error={state.fieldErrors?.name?.[0]}
      />
      <AuthField
        name="email"
        type="email"
        label="Email"
        autoComplete="email"
        required
        error={state.fieldErrors?.email?.[0]}
      />
      <AuthField
        name="password"
        type="password"
        label="Mot de passe"
        autoComplete="new-password"
        required
        error={state.fieldErrors?.password?.[0]}
      />

      <div className="mt-1 flex justify-center">
        <RegisteredButton userName={state.userName} />
      </div>

      <p className="mt-4 text-center text-sm text-foreground/70">
        Déjà un compte ?{" "}
        <Link
          href="/login"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          Se connecter
        </Link>
      </p>
    </form>
  );
}
