---
name: bibliotheque-stack
description: Conventions de la bibliothèque Next.js (HeroUI, Prisma 7, better-auth, pnpm). Use when writing or modifying code in this repo — UI, auth, Prisma, routes App Router, Docker Postgres.
---

# Stack Bibliothèque

## Stack figée

- **Package manager** : `pnpm` uniquement
- **App** : Next.js 16 App Router, React 19, TypeScript, Tailwind 4
- **UI** : `@heroui/react` + `@heroui/styles`. Jamais shadcn, jamais Sonner, jamais Lucide
- **Icônes** : `@phosphor-icons/react` (SSR : `/dist/ssr` dans les client components de layout)
- **Toasts** : `toast` + `Toast.Provider` de `@heroui/react` (déjà dans `app/layout.tsx`)
- **Forms** : Server Actions + Zod 4 (`z.email()`, pas `z.string().email()`)
- **Auth** : better-auth + `prismaAdapter` + plugin `nextCookies()` — `lib/auth.ts`
- **DB** : Prisma 7, generator `prisma-client`, output `app/generated/prisma`, adapter `@prisma/adapter-pg` + `pg.Pool` dans `lib/prisma.ts`
- **URL state** : `nuqs` (adapter déjà dans le root layout)
- **Copy UI** : français

## Interdit

- `new PrismaClient()` sans adapter
- `npx prisma` / `npm` / `yarn` (utiliser `pnpm prisma` / `pnpm`)
- Installer Sonner, shadcn, lucide-react, ou une lib motion « pour un fade »

## Prisma / Docker

- Schema : `prisma/schema.prisma` + `prisma.config.ts` (`DATABASE_URL`)
- Dev DB : `pnpm db:up` (Postgres 16, container `bibliotheque-db-dev`)
- Migrate : `pnpm prisma migrate dev` en local, `pnpm db:migrate` sinon

## Routes

- Lecteur : `app/(library)/` — `/`, `/browse`, `/stacks`, `/review`
- Admin : `app/(admin)/admin/` — dashboard, entries, stacks, categories
- Auth : `app/(auth)/` — login / register via Server Actions dans `actions.ts`
