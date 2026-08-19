---
name: search-fiches
description: Postgres ILIKE search on published entries (title, slug, summary, tags). Use when adding search on /browse, header search, or filtering fiches. No external search engine.
---

# Recherche fiches

Pas d’Algolia / Meilisearch. Postgres `ILIKE` d’abord.

## Query lecteur

```ts
const term = q.trim();
await prisma.entry.findMany({
  where: {
    published: true,
    ...(term
      ? {
          OR: [
            { title: { contains: term, mode: "insensitive" } },
            { slug: { contains: term, mode: "insensitive" } },
            { summary: { contains: term, mode: "insensitive" } },
            { tags: { has: term } },
          ],
        }
      : {}),
  },
  orderBy: { position: "asc" },
  include: { category: { include: { stack: true } } },
});
```

Admin : même chose **sans** `published: true`. Combiner avec `nuqs-filtres` (`q`, `kind`, `diffulty`).

Pas de recherche full-text `tsvector` tant que le volume est petit. Accents : `ILIKE` suffit pour le v1.
