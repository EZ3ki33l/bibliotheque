---
name: docker-prod
description: Docker Compose production vs local Postgres (db:up). Use when changing Dockerfile, docker-compose.yml, docker:up, migrator, or exposing the app on port 3003.
---

# Docker

Deux fichiers, deux usages.

| | Dev | Prod |
| --- | --- | --- |
| Compose | `docker-compose.dev.yml` | `docker-compose.yml` |
| Commande | `pnpm db:up` / `db:down` | `pnpm docker:up` / `docker:down` |
| App | Next **hors** Docker (`pnpm dev`) | service `app` |
| DB | `bibliotheque-db-dev`, user/pass dans le compose | env `POSTGRES_*` **requis** |
| Port app | 3000 local | `127.0.0.1:3003:3000` |
| Réseau | — | `docker_proxy` **externe** + `bibliotheque_internal` |

## Prod

- Multi-stage `Dockerfile` : `deps` → `builder` (`prisma generate` + `pnpm build`) → `migrator` → `runner` (standalone `server.js`)
- `CI=true` pour pnpm 11 / `allowBuilds` dans l’image
- `migrate` : `scripts/docker-migrate.sh` = `prisma migrate deploy` en boucle jusqu’au succès
- `DATABASE_URL` interne : `postgresql://user:pass@db:5432/db?schema=public`
- Ne pas binder Postgres hors `127.0.0.1`
- Ne pas committer `.env` (`.env*` gitignoré, `!.env.example`)

## Dev

Ne pas lancer `docker compose up app` pour coder. Seulement Postgres via `pnpm db:up`.
