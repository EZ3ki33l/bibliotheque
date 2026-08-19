import Link from "next/link";
import { StackIcon } from "@phosphor-icons/react/dist/ssr";
import { listStacks } from "@/features/stacks/queries";

export default async function StacksPage() {
  const stacks = await listStacks();

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-lg font-medium">Stacks</h1>
        <p className="text-sm text-zinc-400">
          Parcours les stacks et leurs fiches publiées.
        </p>
      </header>

      {stacks.length === 0 ? (
        <p className="text-sm text-zinc-400">Aucun stack pour le moment.</p>
      ) : (
        <ul className="grid gap-3 sm:grid-cols-2">
          {stacks.map((stack) => (
            <li key={stack.id}>
              <Link
                href={`/stacks/${stack.slug}`}
                className="flex h-full flex-col gap-3 rounded-xl border border-white/8 bg-zinc-950 p-4 transition-colors duration-150 hover:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <StackIcon className="mt-0.5 size-4 shrink-0 text-zinc-400" />
                  <div className="min-w-0">
                    <p className="font-medium">{stack.name}</p>
                    {stack.description ? (
                      <p className="mt-1 text-sm text-zinc-400">
                        {stack.description}
                      </p>
                    ) : null}
                  </div>
                </div>
                <p className="text-xs text-zinc-500">
                  {stack._count.categories}{" "}
                  {stack._count.categories > 1 ? "catégories" : "catégorie"}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
