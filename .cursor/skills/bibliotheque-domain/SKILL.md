---
name: bibliotheque-domain
description: Modèle métier Stack / Category / Entry / ReviewCard / Quiz. Use when adding fiches, catégories, stacks, révision espacée, quizzes, or Prisma models for the knowledge library.
---

# Domaine Bibliothèque

Bibliothèque personnelle de connaissances front : pas un CMS générique.

## Hiérarchie

`Stack` (ex. React, Prisma) → `Category` → `Entry`

- `EntryKind` : `FUNCTION` | `COMPONENT` | `CONCEPT`
- `Difficulty` : `BEGINNER` | `INTERMEDIATE` | `ADVANCED`
- Révision : `ReviewCard` + `ReviewRating` (`AGAIN` | `HARD` | `GOOD` | `EASY`)
- Quiz : `QuizAttemps` lié à `User` (orthographe actuelle du schema : `QuizAttemps` — ne pas « corriger » sans migration)

## Schema actuel (incomplet)

`User`, `Admin`, better-auth (`Session`, `Account`, `Verification`), `Stack`, `Category` existent.

Enums `EntryKind`, `Difficulty`, `ReviewRating` et relations `User.reviewCards` / `User.quizAttemps` sont déclarés **sans** les models `Entry` / `ReviewCard` / `QuizAttemps`. Toute feature fiches/révision **commence par compléter le schema + une migration**.

## Règles

- `Category.slug` unique par stack (`@@unique([stackId, slug])`)
- `Stack.slug` unique global
- `position` = ordre d’affichage, pas un id
- Lecteur : lecture seule. CRUD stacks / catégories / fiches = routes `/admin/*` + rôle `Admin` (`ADMIN` | `SUPER_ADMIN`)
- Une fiche = une `Entry` (kind + difficulty). MDX / Sandpack / Monaco viennent **après** le model

## Nommage UI

- Fiches (pas « articles », pas « posts »)
- Stacks / Catégories (pas « tags » ni « folders »)
- Révision (pas « flashcards » dans l’UI)
