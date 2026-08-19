---
name: nextjs-16-app
description: Next.js 16 App Router conventions for this library (LayoutProps, route groups, RSC). Use when adding pages, layouts, Server Actions, or API routes. Read node_modules/next/dist/docs before using unfamiliar Next APIs.
---

# Next.js 16 (cette app)

Cette version casse des APIs anciennes. Avant d’écrire du Next « de mémoire », lire `node_modules/next/dist/docs/` (ou le guide local). Heed deprecation notices.

## Layouts

```tsx
export default async function RootLayout({ children }: LayoutProps<"/">) {
```

- Typage : `LayoutProps<"/">` (pas `{ children: React.ReactNode }` custom si le type généré existe)
- Root : `app/layout.tsx` — session, sidebar, `Toast.Provider`, `NuqsAdapter`, `dynamic = "force-dynamic"`
- Groupes : `(library)`, `(admin)`, `(auth)` — le groupe n’apparaît pas dans l’URL
- `(admin)/layout.tsx` est un pass-through aujourd’hui — le gate va dans `admin-gate`, le chrome reste le root layout

## Conventions

- Pages = Server Components par défaut
- `"use client"` seulement pour hooks, `useActionState`, `authClient`, interactions
- Mutations = Server Actions (`"use server"`), pas un POST fetch vers une Route Handler sauf AI streaming
- Catch-all auth : `app/api/auth/[...all]/route.ts` déjà en place
- Alias : `@/` → racine du repo

## Routes existantes

Ne pas créer de `pages/` (Pages Router). Ne pas dupliquer un second root chrome.

Query string : `nuqs` (adapter déjà monté), pas `searchParams` + `useState` pour les filtres persistants. Voir `nuqs-filtres`.
