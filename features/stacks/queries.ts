import { prisma } from "@/lib/prisma";

export function listStacks() {
  return prisma.stack.findMany({
    orderBy: [{ position: "asc" }, { name: "asc" }],
    include: { _count: { select: { categories: true } } },
  });
}

export function getStackById(id: string) {
  return prisma.stack.findUnique({
    where: { id },
    include: {
      categories: { orderBy: { position: "asc" } },
    },
  });
}

export function getStackBySlug(slug: string) {
  return prisma.stack.findUnique({
    where: { slug },
    include: {
      categories: {
        orderBy: { position: "asc" },
        include: {
          entries: {
            where: { published: true },
            orderBy: { position: "asc" },
            select: {
              id: true,
              title: true,
              slug: true,
              summary: true,
              kind: true,
              difficulty: true,
              tags: true,
            },
          },
        },
      },
    },
  });
}
