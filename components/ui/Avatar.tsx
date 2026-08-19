"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

function getUserInitial(name?: string | null, email?: string | null) {
  const source = name?.trim() || email?.trim() || "?";
  return source.charAt(0).toUpperCase();
}

type AvatarProps = {
  name?: string | null;
  email?: string | null;
  href?: string;
  className?: string;
};

export default function Avatar({ name, email, href, className }: AvatarProps) {
  const initial = getUserInitial(name, email);
  const classes =
    className ??
    "flex size-8 items-center justify-center rounded-full bg-amber-500/90 text-sm font-medium text-white ring-1 ring-white/15";
  const content = (
    <span className={classes} aria-hidden={!href}>
      {initial}
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={"/admin"}
      aria-label={`Profil de ${name ?? email ?? "utilisateur"}`}
      className="flex size-10 items-center justify-center rounded-full bg-amber-500 text-white"
    >
      {content}
    </Link>
  );
}
