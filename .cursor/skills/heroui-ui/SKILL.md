---
name: heroui-ui
description: Composants HeroUI v3, Phosphor, Tailwind 4 pour cette bibliothèque. Use when building pages, forms, sidebar, toasts, buttons, or admin CRUD UI. Do not use for Sonner, shadcn, or Radix.
---

# UI Bibliothèque

## Imports

```tsx
import { Button, toast, Toast } from "@heroui/react";
import { BooksIcon } from "@phosphor-icons/react/dist/ssr";
```

- `Toast.Provider placement="top"` est **déjà** dans `app/layout.tsx` — ne pas en remettre un
- Variants boutons existants : `variant="primary"` (voir `components/ui/ToastButton.tsx`, `GroupButton.tsx`)
- Layout : sidebar `components/layout/AppSideBar.tsx` + `main` `max-w-5xl`

## Contre-skills

Ce projet n’a pas Sonner. Ne pas proposer shadcn/ui, CVA, lucide.

## Motion

Peu d’animation. Nav : `transition-colors duration-150` seulement. Pas de lib motion pour un fade.

## Admin CRUD

Pages admin encore des stubs. Pour stacks / catégories / fiches :

- Server Components pour la lecture Prisma
- Server Actions + Zod pour create/update/delete
- HeroUI pour les contrôles, Phosphor pour les icônes
- Slug éditable, `position` réordonnable plus tard
