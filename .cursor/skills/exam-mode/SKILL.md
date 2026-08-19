---
name: exam-mode
description: Exam mode for an Entry at /entries/[entrySlug]/exam without spoiling bodyMdx. Use when building quizzes, scoring QuizAttemp, or hiding the fiche solution during an exam.
---

# Mode exam

Route : `app/(library)/entries/[entrySlug]/exam/page.tsx` (vide). Session requise. Fiche `published: true`.

## Produit

- Pas de `bodyMdx` ni du lab Sandpack « solution » sur cet écran
- Titre + `summary` + questions seulement
- Questions : générées (voir `ai-sdk-bibliotheque`) ou JSON déjà sur un `QuizAttemp`
- Persister dans `QuizAttemp` : `entryID`, `questions`, puis `answers` + `score` à la soumission

## Flux

1. GET exam → créer (ou reprendre) un `QuizAttemp` sans `answers`
2. Afficher `questions` (shape Zod partagée avec la route AI)
3. POST / Server Action → sauver `answers`, calculer `score`
4. Écran résultat : score + lien vers `/entries/[entrySlug]` (la fiche)

Pas de spoilers dans les toasts. Copy : « Exam », « Valider », « Voir la fiche ».
