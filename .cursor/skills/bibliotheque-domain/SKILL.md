---
name: bibliotheque-domain
description: Modèle métier Stack / Category / Entry / ReviewCard / QuizAttemp. Use when adding fiches, catégories, stacks, révision espacée, quizzes, or Prisma models for the knowledge library.
---

# Domaine Bibliothèque

Bibliothèque personnelle de connaissances front : pas un CMS générique.

## Hiérarchie

`Stack` (ex. React, Prisma) → `Category` → `Entry`

- `EntryKind` : `FUNCTION` | `COMPONENT` | `CONCEPT`
- `Difficulty` : `BEGINNER` | `INTERMEDIATE` | `ADVANCED`
- Révision : `ReviewCard` + `ReviewLog` + `ReviewRating` (`AGAIN` | `HARD` | `GOOD` | `EASY`)
- Quiz : `QuizAttemp` (orthographe schema — ne pas « corriger » sans migration)

## Models (migration `20260818092801_stacks_categories_entries`)

| Model | Champs utiles |
| --- | --- |
| `Stack` | `name`, `slug` unique, `description`, `position` |
| `Category` | `stackId`, `slug` unique par stack, `description`, `position` — **pas de `name`** |
| `Entry` | `title`, `slug` unique global, `summary`, `bodyMdx`, `kind`, `diffulty`, `tags[]`, `published`, `position`, `template`, `files` (Json requis), `dependencies` (Json?) |
| `ReviewCard` | 1 par `(userId, entryId)`, `easeFactor` 2.5, `intervalDays`, `repetitions`, `nextReviewAt` |
| `QuizAttemp` | `entryID`, `questions` Json, `answers` Json?, `score` |

## Typos schema (ne pas « fixer » sans migration)

- `Entry.diffulty` (pas `difficulty`)
- `Entry.createAt` (pas `createdAt`)
- `QuizAttemp` + `User.quizAttemps` + `QuizAttemp.entryID`

Prisma : `entry.diffulty`, `entry.createAt`, `quizAttemp.entryID`.

## Règles

- Lecteur : `published: true` seulement. Brouillons = admin
- CRUD = `/admin/*` + table `Admin` (`ADMIN` | `SUPER_ADMIN`)
- `position` = ordre d’affichage
- `Entry.files` : Json Sandpack, **obligatoire** (même `{}` pour un `CONCEPT`)
- `template` défaut `"react-ts"`
- Cascade : supprimer un Stack → Categories → Entries → cards / quiz

## Nommage UI

- Fiches (pas « articles », pas « posts »)
- Stacks / Catégories (pas « tags » ni « folders »)
- Révision (pas « flashcards » dans l’UI)
- Catégorie : afficher le `slug` (ou le dériver), pas un champ `name` inexistant

## Routes

| Zone | Path |
| --- | --- |
| Catalogue | `/stacks`, `/stacks/[stackSlug]`, `/stacks/[stackSlug]/[categorySlug]`, `/browse` |
| Fiche | `/entries/[entrySlug]`, `/entries/[entrySlug]/exam` |
| Révision | `/review` |
| Admin | `/admin/stacks`, `/admin/categories`, `/admin/entries` |
