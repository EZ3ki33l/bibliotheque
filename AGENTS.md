<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Learned User Preferences

- Chrome persistant : menus/sidebar toujours visibles ; le `main` est décalé de la nav, pas superposé.
- Header auth : Connexion / S'enregistrer si déconnecté, initiale ou avatar si connecté ; l'UI session doit se mettre à jour sans F5.
- Ne pas masquer un mismatch d'hydratation (Dark Reader ou autre) avec `suppressHydrationWarning` — corriger la cause.
- Explications organisées avec extraits complets ; pas de bouts de code fragmentés enchaînés.
- Sauvegarde = Prettier (`prettier-plugin-tailwindcss` déjà en place).
- Toasts HeroUI en haut de l'écran ; `ToastButton` n'est pas un bouton submit de formulaire.
- Pages login / register : contenu centré verticalement.

## Learned Workspace Facts

- Bibliothèque perso de révision de code (fiches Stack → Category → Entry), pas un CMS ; sandbox live + exam / IA.
- Deux Postgres distincts : local `pnpm db:up` (`docker-compose.dev.yml`, `bibliotheque-db-dev`) ; prod `docker-compose.yml` sur VPS. Ne jamais pointer le `.env` local vers la prod.
- Auth better-auth (adapter Prisma) ; hash des mots de passe par better-auth, pas un bcrypt custom dans les Server Actions.
- Admin = table `Admin` (`ADMIN` / `SUPER_ADMIN`), pas un champ `User.role`.
- UI : HeroUI v3 + Phosphor (`/dist/ssr` dans les layouts client), jamais shadcn / Sonner / Lucide ; thème dark only ; copy FR ; `lang="fr-FR"`.
- `Button` HeroUI : `children` doit être une fonction de rendu, pas un `ReactElement`.
- Sidebar bibliothèque : Accueil, Parcourir, Stacks, Révision ; admin : dashboard, fiches, stacks, catégories.
- Champs Prisma : `Entry.difficulty`, `Entry.createdAt`, modèle `QuizAttempt` / `entryId` (ne pas réintroduire `diffulty`, `createAt`, `QuizAttemp`, `entryID`).
- Client Prisma généré dans `app/generated/prisma` ; `prisma generate` après changement de schéma.
