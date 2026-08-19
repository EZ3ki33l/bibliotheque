---
name: mdx-playground
description: MDX fiches, Shiki, Sandpack and Monaco playgrounds for library entries. Use when rendering Entry bodyMdx, code labs, live examples, admin editors, or the exam page.
---

# MDX + playgrounds

Dépendances déjà installées. Dossiers `components/{entry,editor,lab,exam}` encore vides.

## Données (`Entry`)

- Texte : `bodyMdx` (en base, pas de `content/*.mdx`)
- Playground : `template` (défaut `"react-ts"`), `files` Json **requis**, `dependencies` Json optionnel
- `kind` : `CONCEPT` → MDX seul ; `FUNCTION` / `COMPONENT` → MDX + Sandpack

## Ordre d’implémentation

1. Rendu lecteur MDX (`next-mdx-remote` + `remark-gfm` + `rehype-pretty-code` / `shiki`)
2. Sandpack (`@codesandbox/sandpack-react`) à partir de `files` / `template` / `dependencies`
3. Éditeur admin Monaco (`@monaco-editor/react`) pour `bodyMdx` + JSON `files`

## Pages

- Lecteur : `app/(library)/entries/[entrySlug]/page.tsx` — `published: true`
- Exam : `app/(library)/entries/[entrySlug]/exam/page.tsx` — voir `exam-mode`
- Admin : `/admin/entries/new` et `[id]/edit`

MDX en Server Component. Sandpack / Monaco = client isolés. Pas highlight.js / Prism.

## Interdit

- Autre pipeline MDX (`@next/mdx`, contentlayer, fumadocs) sans demande
- Thème clair pour les blocs de code (site dark only)
- Supposer `entry.difficulty` — le champ est `diffulty`
