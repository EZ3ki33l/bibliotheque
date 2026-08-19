---
name: heroui-ui
description: Composants HeroUI v3, Phosphor, Tailwind 4 pour cette bibliothèque. Use when building pages, forms, sidebar, toasts, buttons, or admin CRUD UI. Do not use for Sonner, shadcn, or Radix.
---

# UI Bibliothèque

## Imports

```tsx
import { Button, toast, Toast, buttonVariants } from "@heroui/react";
import { BooksIcon } from "@phosphor-icons/react/dist/ssr";
```

- `Toast.Provider placement="top"` est **déjà** dans `app/layout.tsx` — ne pas en remettre un
- Variants boutons : `variant="primary"` | `"ghost"` (voir `ToastButton.tsx`, `AppSideBar.tsx`)
- Lien stylé bouton : `buttonVariants({ variant: "primary", fullWidth: true })` (`GroupButton.tsx`)
- Layout : sidebar `components/layout/AppSideBar.tsx` + `main` `max-w-5xl`
- Champs auth : `components/auth/AuthField.tsx` (input natif + label, pas HeroUI Input pour l’instant)
- Avatar initiales : `components/ui/Avatar.tsx`

## Contre-skills

Ce projet n’a pas Sonner. Ne pas proposer shadcn/ui, CVA, lucide.

## Motion

Peu d’animation. Nav : `transition-colors duration-150` seulement. Pas de lib motion pour un fade.

## Thème

Dark only. Classes existantes : `bg-zinc-950`, `border-white/8`, `text-zinc-400`, `bg-white/8`.

## Admin CRUD

Pages admin encore des stubs. Nav admin : masquer tant que pas de record `Admin` (`admin-gate`). Pour stacks / catégories / fiches :

- Server Components pour la lecture Prisma
- Server Actions + Zod + `useActionState` pour create/update/delete
- HeroUI pour les contrôles, Phosphor pour les icônes
- Slug éditable, `position` réordonnable plus tard
