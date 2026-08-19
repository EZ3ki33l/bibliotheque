---
name: bibliotheque-stack
description: Conventions de la bibliothèque Next.js (HeroUI, Prisma 7, better-auth, pnpm). Use when writing or modifying code in this repo — UI, auth, Prisma, routes App Router, Docker Postgres.
---

# Stack Bibliothèque

## Stack figée

- **Package manager** : `pnpm` uniquement
- **App** : Next.js 16 App Router, React 19, TypeScript, Tailwind 4
- **UI** : `@heroui/react` + `@heroui/styles`. Jamais shadcn, jamais Sonner, jamais Lucide
- **Icônes** : `@phosphor-icons/react` (layout client : `/dist/ssr`)
- **Toasts** : `toast` + `Toast.Provider` de `@heroui/react` (déjà dans `app/layout.tsx`)
- **Forms** : Server Actions + `useActionState` + Zod 4 (`z.email()`, pas `z.string().email()`)
- **Auth** : better-auth + `prismaAdapter` + plugin `nextCookies()` — `lib/auth.ts`
- **DB** : Prisma 7, generator `prisma-client`, output `app/generated/prisma`, adapter `@prisma/adapter-pg` + `pg.Pool` dans `lib/prisma.ts`
- **URL state** : `nuqs` (`NuqsAdapter` déjà dans le root layout)
- **Copy UI** : français
- **Thème** : dark only (`color-scheme: dark` dans `globals.css`)
- Root layout : `export const dynamic = "force-dynamic"` — session RSC à chaque requête

## Interdit

- `new PrismaClient()` sans adapter
- `npx prisma` / `npm` / `yarn` (utiliser `pnpm prisma` / `pnpm`)
- Installer Sonner, shadcn, lucide-react, ou une lib motion « pour un fade »
- Skills Prisma Platform (`prisma-postgres`, `prisma-compute`, `prisma-mongodb-*`) — cette app = Postgres Docker local

## Prisma / Docker

- Schema : `prisma/schema.prisma` + `prisma.config.ts` (`DATABASE_URL`)
- Dev DB : `pnpm db:up` (Postgres 16, container `bibliotheque-db-dev`)
- Migrate : `pnpm prisma migrate dev` en local, `pnpm db:migrate` sinon
- Import client : `import { PrismaClient } from "@/app/generated/prisma/client"`

## Routes

- Lecteur : `app/(library)/` — `/`, `/browse`, `/stacks`, `/review`, `/entries/[entrySlug]`
- Admin : `app/(admin)/admin/` — dashboard, entries, stacks, categories
- Auth : `app/(auth)/` — login / register via Server Actions dans `actions.ts`

## Dépendances déjà là (ne pas réinstaller)

`next-mdx-remote`, `rehype-pretty-code`, `shiki`, `@codesandbox/sandpack-react`, `@monaco-editor/react`, `ai` + `@ai-sdk/openai-compatible`, `react-hook-form` + `@hookform/resolvers`. Dossiers `components/{entry,editor,exam,lab}` encore vides.

## MCP (docs live)

Config : `.cursor/mcp.json`

- **HeroUI** : props / exemples composants v3
- **better-auth** : docs session, cookies, adapter
- **Context7** : Next 16, Prisma 7, Zod 4, nuqs, AI SDK — pas pour inventer shadcn

## Skills liées

`heroui-ui`, `better-auth-next`, `bibliotheque-domain`, `prisma-pg-local`, `nextjs-16-app`, `server-actions-zod`, `mdx-playground`, `ai-sdk-bibliotheque`, `revision-espacee`, `admin-gate`, `seed-fiches`, `nuqs-filtres`, `exam-mode`, `search-fiches`, `prettier-tailwind`, `docker-prod`, `git-commit-fr`.
