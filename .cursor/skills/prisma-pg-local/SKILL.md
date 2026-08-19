---
name: prisma-pg-local
description: Prisma 7 local Docker Postgres for this app (adapter-pg, generated client, migrate). Use when changing prisma/schema.prisma, lib/prisma.ts, migrations, or running prisma generate/migrate. Do not use Prisma Platform, MongoDB, or prisma-compute.
---

# Prisma local (cette app)

Postgres Docker local. Pas Prisma Postgres cloud, pas MongoDB, pas Accelerate.

## Fichiers

- Schema : `prisma/schema.prisma` — `generator` = `prisma-client`, `output` = `../app/generated/prisma`
- Config : `prisma.config.ts` — `datasource.url` = `process.env.DATABASE_URL` (dotenv déjà importé)
- Client : `lib/prisma.ts` — `PrismaPg` + `pg.Pool` + singleton `globalThis` en dev
- Import : `import { PrismaClient } from "@/app/generated/prisma/client"`

## Commandes

```bash
pnpm db:up                          # Postgres 16 (docker-compose.dev.yml)
pnpm prisma migrate dev             # local : schema + migration
pnpm prisma generate                # régénère app/generated/prisma
pnpm db:migrate                     # deploy (CI / docker prod)
pnpm prisma studio
```

Jamais `npx prisma`. Jamais `new PrismaClient()` sans `{ adapter }`.

## Sécurité agent

`migrate reset` / `db push --force-reset` : expliquer ce qui sera effacé, demander le consentement explicite, puis seulement :

```bash
PRISMA_USER_CONSENT_FOR_DANGEROUS_AI_ACTION='<message exact de l’utilisateur>' pnpm prisma migrate reset --force
```

Ne pas fabriquer le consentement.

## Schema métier

Voir `bibliotheque-domain` (`Entry.diffulty`, `Entry.createAt`, `QuizAttemp.entryID`). Seed : `prisma/seed.ts` (encore vide) — skill `seed-fiches`.

Ne pas toucher aux models better-auth (`user`, `session`, `account`, `verification`) sauf sync adapter.

## Skills Prisma génériques

`prisma-cli` / `prisma-client-api` OK pour la syntaxe. Ignorer `prisma-postgres`, `prisma-postgres-setup`, `prisma-compute`, `prisma-mongodb-*`, `prisma-database-setup` (cloud / autres moteurs).
