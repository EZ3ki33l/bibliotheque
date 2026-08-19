import { prisma } from "@/lib/prisma";
import type { BrowseFilters } from "@/types";
import type { Prisma } from "@/app/generated/prisma/client";

const entryWithTaxonomy = {
  category: {
    include: { stack: { select: { id: true, name: true, slug: true } } },
  },
} satisfies Prisma.EntryInclude;

export function listAdminEntries() {
  return prisma.entry.findMany({
    orderBy: [{ position: "asc" }, { title: "asc" }],
    include: entryWithTaxonomy,
  });
}

export function getEntryById(id: string) {
  return prisma.entry.findUnique({
    where: { id },
    include: entryWithTaxonomy,
  });
}

export function getPublishedEntryBySlug(slug: string) {
  return prisma.entry.findFirst({
    where: { slug, published: true },
    include: entryWithTaxonomy,
  });
}

export function listPublishedEntries(filters: BrowseFilters = {}) {
  const term = filters.q?.trim();

  return prisma.entry.findMany({
    where: {
      published: true,
      ...(filters.kind ? { kind: filters.kind } : {}),
      ...(filters.difficulty ? { difficulty: filters.difficulty } : {}),
      ...(filters.stack
        ? { category: { stack: { slug: filters.stack } } }
        : {}),
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
    orderBy:
      filters.sort === "recent"
        ? { createdAt: "desc" }
        : [{ position: "asc" }, { title: "asc" }],
    include: entryWithTaxonomy,
  });
}
