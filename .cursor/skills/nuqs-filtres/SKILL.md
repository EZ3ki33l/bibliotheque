---
name: nuqs-filtres
description: nuqs URL filters for browse and catalogue (kind, difficulty, stack, search). Use when building /browse, stack listings, or persistent query-string filters. NuqsAdapter is already in the root layout.
---

# Filtres URL (nuqs)

`NuqsAdapter` est dans `app/layout.tsx`. Page cible : `/browse` (vide). Listes `/stacks` peuvent lire les mêmes params.

## Parsers

```ts
import {
  parseAsStringEnum,
  parseAsString,
  parseAsInteger,
} from "nuqs";
import { EntryKind, Difficulty } from "@/app/generated/prisma/client";

export const browseParams = {
  q: parseAsString.withDefault(""),
  kind: parseAsStringEnum<EntryKind>(["FUNCTION", "COMPONENT", "CONCEPT"]),
  difficulty: parseAsStringEnum<Difficulty>([
    "BEGINNER",
    "INTERMEDIATE",
    "ADVANCED",
  ]),
  stack: parseAsString, // slug
};
```

Côté Prisma, le champ difficulté s’appelle **`diffulty`**. Le query param UI peut rester `difficulty`.

## Règles

- Server Component : `createLoader` / `searchParams` typés Next 16 — lire le doc local `nuqs` + Next avant d’inventer
- Client : `useQueryStates(browseParams)` pour les contrôles HeroUI
- Lecteur : toujours `published: true`
- Pas de `useState` + `router.push` manuel pour ces filtres
- Copy FR : « Type », « Niveau », « Stack », « Rechercher »
