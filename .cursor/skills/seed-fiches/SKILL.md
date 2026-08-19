---
name: seed-fiches
description: Prisma seed for demo stacks, categories, and published entries. Use when filling prisma/seed.ts, adding sample React/Prisma/HeroUI fiches, or setting up prisma db seed.
---

# Seed fiches

`prisma/seed.ts` est vide. Brancher dans `prisma.config.ts` :

```ts
migrations: {
  path: "prisma/migrations",
  seed: "pnpm tsx prisma/seed.ts",
},
```

(`tsx` à ajouter en devDependency si absent.) Lancer : `pnpm prisma db seed` (DB déjà up + migrée).

## Contenu mini

3 stacks (`position` 0, 1, 2) :

| Stack slug | Catégories (slug) | 1 fiche publiée |
| --- | --- | --- |
| `react` | `hooks`, `components` | kind `COMPONENT` ou `FUNCTION` |
| `prisma` | `client`, `schema` | kind `CONCEPT` |
| `heroui` | `buttons`, `toast` | kind `COMPONENT` |

Chaque `Entry` seed :

- `published: true`, `slug` unique, `bodyMdx` court en français
- `diffulty` (typo schema), pas `difficulty`
- `files` : objet Sandpack (`{ "/App.tsx": "..." }`) ou `{}` pour `CONCEPT`
- `template: "react-ts"`

`Category` n’a **pas** de `name` — seulement `slug` + `description`.

Idempotent : `upsert` sur `slug` (Stack / Entry) et `@@unique([stackId, slug])` pour Category. Ne pas seeder User / Admin / better-auth.
