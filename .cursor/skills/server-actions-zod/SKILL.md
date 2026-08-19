---
name: server-actions-zod
description: Server Actions + Zod 4 + useActionState form pattern used in this app. Use when creating login, register, or admin CRUD forms, validation, or mutations.
---

# Server Actions + Zod 4

Référence : `app/(auth)/actions.ts` + `login/page.tsx`.

## Schema (Zod 4)

```ts
import { z } from "zod";

export const exampleSchema = z.object({
  email: z.email("Email invalide"),
  name: z.string().min(2, "Le nom est requis"),
});
```

Pas `z.string().email()`. Messages d’erreur en français.

## Action

```ts
"use server";

export type FormState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function createThing(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = exampleSchema.safeParse({ name: formData.get("name") });
  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors };
  }
  // prisma...
  revalidatePath("/admin/things");
  return {};
}
```

## Formulaire client

```tsx
"use client";
const [state, action] = useActionState(createThing, {});
// fieldErrors → AuthField error={state.fieldErrors?.name?.[0]}
// error global → toast.danger(state.error)
```

## Règles

- Un schema colocalisé (`schema.ts` à côté des actions)
- `safeParse` côté serveur, jamais faire confiance au client
- Après succès : `revalidatePath` (layout si session)
- `react-hook-form` est dans les deps : réserver aux forms complexes (éditeur fiche). Auth / CRUD simple = `useActionState`
- Pas de Route Handler REST pour un CRUD admin si une Server Action suffit
