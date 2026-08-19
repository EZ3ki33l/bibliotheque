---
name: admin-gate
description: Admin route protection via Admin table (ADMIN / SUPER_ADMIN), not a User.role field. Use when adding /admin layouts, middleware, CRUD gates, or hiding admin nav.
---

# Gate admin

Rôle = table `Admin` (1-1 `User`), pas `User.role`. `AdminRole` : `ADMIN` | `SUPER_ADMIN`.

## État actuel

- `(admin)/layout.tsx` = pass-through
- Sidebar affiche « Admin » à tout le monde — à corriger en même temps que le gate

## Pattern

Dans `app/(admin)/layout.tsx` (Server Component) :

1. `auth.api.getSession({ headers: await headers() })`
2. Pas de session → `redirect("/login")`
3. `prisma.admin.findUnique({ where: { userId: session.user.id } })`
4. Pas d’Admin → `redirect("/")` (pas 404 bruyant)
5. Passer `admin.role` aux pages si `SUPER_ADMIN` a des actions extra (supprimer un stack, promouvoir un admin)

Pas de middleware cookie-parsing custom : better-auth session + Prisma.

## UI

Nav admin dans `AppSideBar` seulement si `session` + record `Admin`. Le root layout a déjà `session.user` : charger `admin` au même endroit ou via un petit helper `lib/admin.ts`.

CRUD : Server Actions re-vérifient le record `Admin` (ne pas faire confiance au layout seul).
