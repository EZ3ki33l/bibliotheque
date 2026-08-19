---
name: prettier-tailwind
description: Prettier and prettier-plugin-tailwindcss class order for this app. Use when formatting TSX, adding Tailwind classes, configuring prettier, or using clsx / tv.
---

# Prettier + Tailwind

`prettier.config.mjs` :

```js
plugins: ["prettier-plugin-tailwindcss"],
tailwindStylesheet: "./app/globals.css",
tailwindFunctions: ["clsx", "tv"],
```

Scripts : `pnpm format` / `pnpm format:check`.

## Règles

- Laisser Prettier ordonner les classes — ne pas réordonner à la main
- `clsx(...)` et `tv({...})` sont triés via `tailwindFunctions`
- `tailwind-variants` = `tv` (`@heroui` / `tailwind-variants`), pas CVA
- Pas de `prettier-ignore` sur un `className` long sans raison
- Ne pas ajouter un second formateur (Biome, dprint)
