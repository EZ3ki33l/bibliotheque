"use client";

import { buttonVariants } from "@heroui/react";
import { SignInIcon, UserCircleIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function AuthGroupButton() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3 px-2 py-1">
        <span className="flex size-8 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
          <UserCircleIcon className="size-4 text-zinc-500" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium">Invité</p>
          <p className="text-xs text-zinc-500">Non connecté</p>
        </div>
      </div>
      <Link
        href="/login"
        className={`${buttonVariants({ variant: "primary", fullWidth: true })} justify-center gap-2 no-underline`}
      >
        <SignInIcon className="size-4" />
        Se connecter
      </Link>
      <Link
        href="/register"
        className="block w-full py-1.5 text-center text-sm text-zinc-500 no-underline transition-colors duration-150 hover:text-foreground"
      >
        S&apos;enregistrer
      </Link>
    </div>
  );
}
