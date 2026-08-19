---
name: ai-sdk-bibliotheque
description: Vercel AI SDK quiz and review generation for this library. Use when implementing app/api/ai/quiz, app/api/ai/review, lib/ai.ts, or LLM-assisted exams and spaced-repetition hints.
---

# AI SDK (quiz / révision)

Deps : `ai`, `@ai-sdk/openai-compatible`. Stubs : `lib/ai.ts`, `app/api/ai/quiz/route.ts`, `app/api/ai/review/route.ts`.

## Persistance

- Quiz → `QuizAttemp` (`questions` Json, `answers`, `score`, FK `entryID`)
- Review → `ReviewCard` / `ReviewLog` (algo dans `revision-espacee`)

## Rôle

- Quiz : questions à partir d’une `Entry` (`title`, `summary`, `bodyMdx`) — pas un chatbot
- Review : indice / reformulation pour une carte due, pas un tuteur générique
- Provider OpenAI-compatible : documenter la clé dans `.env.example` au branchement

## Patterns

- Route Handlers OK (streaming). CRUD = Server Actions
- Sortie structurée Zod, pas de texte libre non validé
- Charger l’entrée côté serveur par `slug` / `id` — ne pas poster tout le MDX depuis le client
- Pas de clé API dans le client
- Lecteur : fiches `published: true` seulement
