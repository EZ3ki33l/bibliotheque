---
name: revision-espacee
description: SM-2 spaced repetition on ReviewCard / ReviewLog / ReviewRating. Use when building /review, rating a fiche, scheduling nextReviewAt, or mapping AGAIN HARD GOOD EASY.
---

# Révision espacée (SM-2)

Champs déjà sur `ReviewCard` : `easeFactor` (défaut 2.5), `intervalDays`, `repetitions`, `nextReviewAt`, `lastReviewedAt`. Une carte par `(userId, entryId)`. Chaque vote → `ReviewLog`.

UI : « Révision », pas « flashcards ». Page : `/review`. Due = `nextReviewAt <= now()`, user courant, `entry.published: true`.

## Algo (SuperMemo-2, mapping existant)

`q` : `AGAIN`=0, `HARD`=3, `GOOD`=4, `EASY`=5.

1. Toujours : `lastReviewedAt = now()`, créer un `ReviewLog`.
2. Si `AGAIN` :
   - `repetitions = 0`, `intervalDays = 0`, `nextReviewAt = now()` (revoir tout de suite / même session)
   - `easeFactor = max(1.3, easeFactor - 0.2)`
3. Sinon :
   - `HARD` : `easeFactor = max(1.3, easeFactor - 0.15)`, intervalle ≈ `max(1, round(intervalDays * 1.2))` (si `repetitions === 0` → 1 jour)
   - `GOOD` : `easeFactor` inchangé. intervalle : 1er succès → 1 j, 2e → 6 j, ensuite `round(intervalDays * easeFactor)`
   - `EASY` : `easeFactor += 0.15`, intervalle comme GOOD puis `* 1.3`
   - `repetitions += 1`
   - `nextReviewAt = now() + intervalDays days`

Toujours `easeFactor >= 1.3`. Entiers pour `intervalDays`.

## Mutation

Server Action (pas de Route Handler). `revalidatePath("/review")`. Ne pas créer la carte à la volée sans session. Création lazy OK au premier passage sur une fiche publiée.
