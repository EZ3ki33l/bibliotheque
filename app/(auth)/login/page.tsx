"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { toast } from "@heroui/react";
import { signIn } from "../actions";
import { ConnexionButton } from "@/components/ui/ToastButton";
import { AuthField } from "@/components/auth/AuthField";

export default function LoginPage() {
  const [state, action] = useActionState(signIn, {});

  useEffect(() => {
    if (state.error) toast.danger(state.error);
  }, [state]);

  return (
    <form action={action} className="flex flex-col">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight">Connexion</h1>

      <div className="invisible pointer-events-none" aria-hidden>
        <AuthField label="Nom" tabIndex={-1} />
      </div>

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
        autoComplete="current-password"
        required
        error={state.fieldErrors?.password?.[0]}
      />

      <div className="mt-1 flex justify-center">
        <ConnexionButton userName={state.userName} />
      </div>

      <p className="mt-4 text-center text-sm text-foreground/70">
        Pas encore de compte ?{" "}
        <Link
          href="/register"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          S&apos;enregistrer
        </Link>
      </p>
    </form>
  );
}
