---
name: better-auth-next
description: better-auth dans cette app Next (Prisma adapter, Server Actions, session layout). Use when touching login, register, session, Admin, cookies, or lib/auth.ts / lib/auth-client.ts / app/(auth).
---

# Auth (better-auth)

## Fichiers

- Serveur : `lib/auth.ts` — `prismaAdapter(prisma, { provider: "postgresql" })`, email/password, `nextCookies()`, `cookieCache: false`
- Client : `lib/auth-client.ts` — `createAuthClient()`
- Route catch-all : `app/api/auth/[...all]/route.ts` — `toNextJsHandler(auth)`
- Actions : `app/(auth)/actions.ts` — `auth.api.signUpEmail` / `signInEmail` + `headers()`
- Schemas : `app/(auth)/schema.ts` (Zod 4, `z.email()`)
- Session RSC : `auth.api.getSession({ headers: await headers() })` dans `app/layout.tsx`
- UI : `app/(auth)/login/page.tsx`, `register/page.tsx`, `components/auth/AuthField.tsx`

## Patterns

1. Mutations auth = Server Actions + `useActionState`, pas `authClient.signIn.email` depuis un form
2. Après succès : `revalidatePath("/", "layout")` puis toast HeroUI côté client (`ConnexionButton` / `RegisteredButton`)
3. Client session : `authClient.useSession()` + `refetch()` avant `router.push` / `router.refresh`
4. Sign-out : `authClient.signOut()` puis `router.refresh()` (sidebar)
5. Gate admin : table `Admin` (1-1 User), pas un champ `role` sur `User` — détail dans `admin-gate`
6. Ne pas réactiver `cookieCache` sans raison : il est volontairement off

## UI

Toasts via `@heroui/react` (`toast.success`, `toast.danger`). Pas Sonner.
