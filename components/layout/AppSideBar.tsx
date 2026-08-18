"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArticleIcon,
  ArrowCircleRightIcon,
  BooksIcon,
  CardsIcon,
  CompassIcon,
  FoldersIcon,
  SquaresFourIcon,
  StackIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Avatar from "@/components/ui/Avatar";
import AuthGroupButton from "@/components/ui/GroupButton";

type SidebarUser = {
  name: string;
  email: string;
} | null;

type NavItem = {
  href: string;
  label: string;
  icon: typeof BooksIcon;
  exact?: boolean;
};

const LIBRARY_NAV: NavItem[] = [
  { href: "/", label: "Accueil", icon: BooksIcon, exact: true },
  { href: "/browse", label: "Parcourir", icon: CompassIcon },
  { href: "/stacks", label: "Stacks", icon: StackIcon },
  { href: "/review", label: "Révision", icon: CardsIcon },
];

const ADMIN_NAV: NavItem[] = [
  { href: "/admin", label: "Dashboard", icon: SquaresFourIcon, exact: true },
  { href: "/admin/entries", label: "Fiches", icon: ArticleIcon },
  { href: "/admin/stacks", label: "Stacks", icon: StackIcon },
  { href: "/admin/categories", label: "Catégories", icon: FoldersIcon },
];

function isNavActive(pathname: string, item: NavItem) {
  if (item.exact) return pathname === item.href;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

function NavSection({
  title,
  items,
  pathname,
}: {
  title: string;
  items: NavItem[];
  pathname: string;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="px-2.5 pb-1 text-[11px] font-medium tracking-wide text-zinc-500 uppercase">
        {title}
      </p>
      {items.map((item) => {
        const active = isNavActive(pathname, item);
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors duration-150 ${
              active
                ? "bg-white/8 text-foreground"
                : "text-zinc-400 hover:bg-white/5 hover:text-foreground"
            }`}
          >
            <Icon className="size-4 shrink-0" />
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export function AppSidebar({ user }: { user: SidebarUser }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const signedOut = !isPending && !session?.user;
  const currentUser = signedOut ? null : (session?.user ?? user);

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-white/8 bg-zinc-950 px-3 py-4">
      <Link href="/" className="mb-6 px-2 text-sm font-medium tracking-tight">
        Bibliothèque
      </Link>

      <nav className="flex flex-1 flex-col gap-5">
        <NavSection title="Bibliothèque" items={LIBRARY_NAV} pathname={pathname} />
        <NavSection title="Admin" items={ADMIN_NAV} pathname={pathname} />
      </nav>

      <div className="mt-auto border-t border-white/8 pt-3">
        {isPending && !currentUser ? (
          <div className="h-10 animate-pulse rounded-lg bg-white/8" />
        ) : currentUser ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 px-2 py-1">
              <Avatar name={currentUser.name} email={currentUser.email} />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{currentUser.name}</p>
                <p className="truncate text-xs text-zinc-500">{currentUser.email}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start text-zinc-400"
              onPress={async () => {
                await authClient.signOut();
                router.refresh();
              }}
            >
              <ArrowCircleRightIcon className="size-4" />
              Déconnexion
            </Button>
          </div>
        ) : (
          <AuthGroupButton />
        )}
      </div>
    </aside>
  );
}
