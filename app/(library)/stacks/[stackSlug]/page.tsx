import Link from "next/link";
import { notFound } from "next/navigation";
import { getStackBySlug } from "@/features/stacks/queries";
import type { Difficulty, EntryKind } from "@/app/generated/prisma/client";

const KIND_LABEL: Record<EntryKind, string> = {
  FUNCTION: "Fonction",
  COMPONENT: "Composant",
  CONCEPT: "Concept",
};

const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  BEGINNER: "Débutant",
  INTERMEDIATE: "Intermédiaire",
  ADVANCED: "Avancé",
};

export default async function StackPage({
  params,
}: PageProps<"/stacks/[stackSlug]">) {
  const { stackSlug } = await params;
  const stack = await getStackBySlug(stackSlug);

  if (!stack) notFound();

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <p className="text-xs text-zinc-500">
          <Link href="/stacks" className="hover:text-zinc-300">
            Stacks
          </Link>
          <span className="mx-1.5">/</span>
          {stack.name}
        </p>
        <h1 className="text-lg font-medium">{stack.name}</h1>
        {stack.description ? (
          <p className="text-sm text-zinc-400">{stack.description}</p>
        ) : null}
      </header>

      {stack.categories.length === 0 ? (
        <p className="text-sm text-zinc-400">Aucune catégorie dans ce stack.</p>
      ) : (
        stack.categories.map((category) => (
          <section key={category.id} className="flex flex-col gap-3">
            <div>
              <h2 className="text-sm font-medium">{category.name}</h2>
              {category.description ? (
                <p className="text-sm text-zinc-400">{category.description}</p>
              ) : null}
            </div>

            {category.entries.length === 0 ? (
              <p className="text-sm text-zinc-500">Aucune fiche publiée.</p>
            ) : (
              <ul className="flex flex-col gap-2">
                {category.entries.map((entry) => (
                  <li key={entry.id}>
                    <Link
                      href={`/entries/${entry.slug}`}
                      className="flex flex-col gap-1 rounded-xl border border-white/8 p-4 transition-colors duration-150 hover:bg-white/5"
                    >
                      <p className="font-medium">{entry.title}</p>
                      {entry.summary ? (
                        <p className="text-sm text-zinc-400">{entry.summary}</p>
                      ) : null}
                      <p className="text-xs text-zinc-500">
                        {KIND_LABEL[entry.kind]} ·{" "}
                        {DIFFICULTY_LABEL[entry.difficulty]}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))
      )}
    </div>
  );
}
