---
name: context7-mcp
description: This skill should be used when the user asks about libraries, frameworks, API references, or needs code examples. Activates for setup questions, code generation involving libraries, or mentions of specific frameworks like React, Vue, Next.js, Prisma, Supabase, HeroUI, better-auth, etc.
---

When the user asks about libraries, frameworks, or needs code examples, use Context7 to fetch current documentation instead of relying on training data.

## When to Use This Skill

Activate this skill when the user:

- Asks setup or configuration questions ("How do I configure Next.js middleware?")
- Requests code involving libraries ("Write a Prisma query for...")
- Needs API references ("What are the HeroUI Button props?")
- Mentions specific frameworks (React, Next.js, Prisma, Tailwind, HeroUI, better-auth, Zod, nuqs)

## How to Fetch Documentation

### Step 1: Resolve the Library ID

Call `resolve-library-id` with:

- `libraryName`: The library name extracted from the user's question
- `query`: What to look up in the library's documentation (improves relevance ranking)

### Step 2: Select the Best Match

From the resolution results, choose based on:

- Exact or closest name match to what the user asked for
- Higher benchmark scores indicate better documentation quality
- If the user mentioned a version (e.g., "React 19", "Next.js 16"), prefer version-specific IDs

### Step 3: Fetch the Documentation

Call `query-docs` with:

- `libraryId`: The selected Context7 library ID (e.g., `/vercel/next.js`)
- `query`: What to look up in the library's documentation, scoped to a single concept

If the user's question spans multiple distinct concepts, make a separate `query-docs` call per concept with the same library ID, unless the question is about how the concepts interact.

### Step 4: Use the Documentation

Incorporate the fetched documentation into your response:

- Answer the user's question using current, accurate information
- Include relevant code examples from the docs
- Cite the library version when relevant

## Guidelines

- **Be specific**: keep each query to a single concept
- **Version awareness**: pin Next 16, Prisma 7, HeroUI v3 when resolving IDs
- **Prefer official sources**: official/primary packages over community forks
- **MCP spécialisés** : composants HeroUI → MCP `heroui` ; auth better-auth → MCP `better-auth`. Context7 pour le reste (Next, Zod, nuqs, AI SDK, Sandpack).
