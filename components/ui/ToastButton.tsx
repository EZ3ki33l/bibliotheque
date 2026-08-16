"use client";

import { Button, toast } from "@heroui/react";
import { HandWavingIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type ConnexionButtonProps = {
  userName?: string;
};

export function ConnexionButton({ userName }: ConnexionButtonProps) {
  const router = useRouter();
  const hasWelcomed = useRef(false);

  useEffect(() => {
    if (!userName || hasWelcomed.current) return;
    hasWelcomed.current = true;
    toast.success(`Bonjour, bienvenue parmi nous ${userName} !`, {
      indicator: <HandWavingIcon size={20} weight="fill" />,
    });
    router.push("/admin");
  }, [userName, router]);

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
  const hasRegistered = useRef(false);

  useEffect(() => {
    if (!userName || hasRegistered.current) return;
    hasRegistered.current = true;
    toast.success(`Compte créé, bienvenue ${userName}`, {
      indicator: <HandWavingIcon size={20} weight="fill" />,
    });
    router.push("/admin");
  }, [userName, router]);

  return (
    <div className="flex h-full max-w-xl flex-col items-center justify-center">
      <Button size="lg" variant="primary" type="submit">
        Créer le compte
      </Button>
    </div>
  );
}
