import { Difficulty, EntryKind } from "@/app/generated/prisma/enums";

export type ActionState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  id?: string;
  slug?: string;
};

export type SandpackFiles = Record<string, string>;

export type BrowseFilters = {
  q?: string;
  kind?: EntryKind;
  difficulty?: Difficulty;
  stack?: string;
  sort?: "position" | "recent";
};
