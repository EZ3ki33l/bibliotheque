import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedEntryBySlug } from "@/features/entries/queries";
import { EntryMdx } from "@/components/entry/EntryMdx";
import { Playground } from "@/components/lab/Playground";
import type { Difficulty, EntryKind } from "@/app/generated/prisma/client";
import { JsonToStringRecord } from "@/lib/utils";

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

export default async function EntryPage({
  params,
}: PageProps<"/entries/[entrySlug]">) {
  const { entrySlug } = await params;
  const entry = await getPublishedEntryBySlug(entrySlug);

  if (!entry) notFound();

  const { stack } = entry.category;
  const files = JsonToStringRecord(entry.files);
  const dependencies = JsonToStringRecord(entry.dependencies);
  const showPlayground = entry.kind !== "CONCEPT" && files;

  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <p className="text-xs text-zinc-500">
          <Link href="/stacks" className="hover:text-zinc-300">
            Stacks
          </Link>
          <span className="mx-1.5">/</span>
          <Link href={`/stacks/${stack.slug}`} className="hover:text-zinc-300">
            {stack.name}
          </Link>
          <span className="mx-1.5">/</span>
          {entry.category.name}
        </p>
        <h1 className="text-lg font-medium">{entry.title}</h1>
        {entry.summary ? (
          <p className="text-sm text-zinc-400">{entry.summary}</p>
        ) : null}
        <p className="text-xs text-zinc-500">
          {KIND_LABEL[entry.kind]} · {DIFFICULTY_LABEL[entry.difficulty]}
        </p>
      </header>

      <EntryMdx source={entry.bodyMdx} />

      {showPlayground ? (
        <Playground
          files={files}
          template={entry.template}
          dependencies={dependencies}
        />
      ) : null}
    </article>
  );
}
