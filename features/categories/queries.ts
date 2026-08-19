import { prisma } from "@/lib/prisma";

export function listCategories() {
  return prisma.category.findMany({
    orderBy: [{ position: "asc" }, { name: "asc" }],
    include: {
      stack: { select: { id: true, name: true, slug: true } },
      _count: { select: { entries: true } },
    },
  });
}

export function listCategoriesForSelect() {
  return prisma.category.findMany({
    orderBy: [{ position: "asc" }, { name: "asc" }],
    select: {
      id: true,
      name: true,
      slug: true,
      stack: { select: { name: true, slug: true } },
    },
  });
}

export function getCategoryById(id: string) {
  return prisma.category.findUnique({
    where: { id },
    include: { stack: true },
  });
}

export function getCategoryBySlugs(stackSlug: string, categorySlug: string) {
  return prisma.category.findFirst({
    where: {
      slug: categorySlug,
      stack: { slug: stackSlug },
    },
    include: {
      stack: true,
      entries: {
        where: { published: true },
        orderBy: { position: "asc" },
      },
    },
  });
}
