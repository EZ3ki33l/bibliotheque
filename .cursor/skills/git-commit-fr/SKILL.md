---
name: git-commit-fr
description: Conventional Commits in French for this repo. Use when writing git commit messages, staging files, or deciding what not to commit (.env, graphify-out, generated Prisma).
---

# Commits

Conventional Commits, sujet **français**, impératif, ~72c.

```
feat(fiches): ajouter le model Entry et la révision SM-2
fix(auth): renvoyer les fieldErrors Zod au login
chore(skills): documenter le gate admin
```

Types : `feat` | `fix` | `refactor` | `chore` | `docs` | `style`. Scope court : `auth`, `admin`, `fiches`, `prisma`, `ui`, `skills`.

## Ne jamais stager

- `.env`, `.env.*` (sauf `.env.example`)
- `app/generated/prisma`
- `graphify-out/`
- `node_modules/`, `.next/`

Ne pas committer sans demande explicite de l’utilisateur. Pas de `--no-verify`. Pas de force-push sur `main`.
