"use client";

import { Button, toast } from "@heroui/react";
import { HandWavingIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { authClient } from "@/lib/auth-client";

async function enterApp(
  router: ReturnType<typeof useRouter>,
  refetch: () => Promise<void>,
) {
  await refetch();
  router.push("/admin");
  router.refresh();
}

type ConnexionButtonProps = {
  userName?: string;
};

export function ConnexionButton({ userName }: ConnexionButtonProps) {
  const router = useRouter();
  const { refetch } = authClient.useSession();
  const hasWelcomed = useRef(false);

  useEffect(() => {
    if (!userName || hasWelcomed.current) return;
    hasWelcomed.current = true;
    toast.success(`Bonjour, bienvenue parmi nous ${userName} !`, {
      indicator: <HandWavingIcon size={20} weight="fill" />,
    });
    void enterApp(router, refetch);
  }, [userName, router, refetch]);

  return (
    <div className="flex h-full max-w-xl flex-col items-center justify-center">
      <Button size="lg" variant="primary" type="submit">
        Connexion
      </Button>
    </div>
  );
}

type RegisteredButtonProps = {
  userName?: string;
};

export function RegisteredButton({ userName }: RegisteredButtonProps) {
  const router = useRouter();
  const { refetch } = authClient.useSession();
  const hasRegistered = useRef(false);

  useEffect(() => {
    if (!userName || hasRegistered.current) return;
    hasRegistered.current = true;
    toast.success(`Compte créé, bienvenue ${userName}`, {
      indicator: <HandWavingIcon size={20} weight="fill" />,
    });
    void enterApp(router, refetch);
  }, [userName, router, refetch]);

  return (
    <div className="flex h-full max-w-xl flex-col items-center justify-center">
      <Button size="lg" variant="primary" type="submit">
        Créer le compte
      </Button>
    </div>
  );
}
