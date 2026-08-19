import { Prisma } from "@/app/generated/prisma/client";

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function isUniqueConflict(error: unknown) {
  return (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  );
}

export function parseJsonRecord(
  value: FormDataEntryValue | null,
):
  | { ok: true; data: Record<string, string> | undefined }
  | { ok: false; error: string } {
  if (value == null || value === "") {
    return { ok: true, data: undefined };
  }
  if (typeof value !== "string") {
    return { ok: false, error: "JSON invalide" };
  }

  try {
    const parsed: unknown = JSON.parse(value);
    if (
      parsed === null ||
      typeof parsed !== "object" ||
      Array.isArray(parsed)
    ) {
      return { ok: false, error: "Doit être un objet JSON" };
    }

    const record = parsed as Record<string, unknown>;
    for (const [key, val] of Object.entries(record)) {
      if (typeof val !== "string") {
        return {
          ok: false,
          error: `La valeur de « ${key} » doit être une chaîne`,
        };
      }
    }

    return { ok: true, data: record as Record<string, string> };
  } catch {
    return { ok: false, error: "JSON invalide" };
  }
}

export function JsonToStringRecord(
  value: unknown,
): Record<string, string> | undefined {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return undefined;
  }

  const record: Record<string, string> = {};
  for (const [key, val] of Object.entries(value)) {
    if (typeof val === "string") {
      record[key] = val;
    }
  }
  return Object.keys(record).length > 0 ? record : undefined;
}
