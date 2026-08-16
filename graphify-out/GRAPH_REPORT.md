# Graph Report - /mnt/SSD medias/Codes/bibliotheque  (2026-08-16)

## Corpus Check
- Corpus is ~742 words - fits in a single context window. You may not need a graph.

## Summary
- 160 nodes · 154 edges · 39 communities (9 shown, 30 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Lint CSS Tooling
- TypeScript Compiler Options
- Next.js Docs And Agents
- Package Scripts And Meta
- TypeScript File Includes
- Package Managers And Builds
- Auth AI And Prisma
- App Root Layout
- Home Page UI
- AI SDK Package
- clsx Utility
- Sandpack React
- ESLint Config File
- HeroUI React
- HeroUI Styles
- Hookform Resolvers
- Monaco Editor
- Monaco Editor React
- Next.js Package
- Next.js Config
- MDX Remote
- URL State nuqs
- Phosphor Icons
- React Package
- React Aria
- React Aria Components
- React Aria i18n
- React Aria SSR
- React Aria Utils
- React DOM
- React Hook Form
- Rehype Pretty Code
- Remark GFM
- Shiki Highlighter
- Tailwind Variants
- Zod Validation
- PostCSS Config
- Prettier Config

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Next.js` - 9 edges
3. `scripts` - 7 edges
4. `include` - 7 edges
5. `Next.js Agent Rules` - 5 edges
6. `Development Server` - 5 edges
7. `lib` - 4 edges
8. `Vercel Platform` - 3 edges
9. `allowBuilds` - 3 edges
10. `ToastButton()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Next.js Documentation` --semantically_similar_to--> `Next.js Local Documentation`  [INFERRED] [semantically similar]
  README.md → AGENTS.md
- `Next.js` --conceptually_related_to--> `Next.js Agent Rules`  [INFERRED]
  README.md → AGENTS.md
- `pnpm` --conceptually_related_to--> `allowBuilds`  [INFERRED]
  README.md → pnpm-workspace.yaml

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Development Server Package Managers** — readme_development_server, readme_npm, readme_yarn, readme_pnpm, readme_bun [EXTRACTED 1.00]
- **Next.js Learn More Resources** — readme_nextjs_documentation, readme_learn_nextjs, readme_nextjs_github [EXTRACTED 1.00]
- **pnpm allowBuilds Packages** — pnpm_workspace_allowbuilds, pnpm_workspace_es5_ext, pnpm_workspace_unrs_resolver [EXTRACTED 1.00]

## Communities (39 total, 30 thin omitted)

### Community 0 - "Lint CSS Tooling"
Cohesion: 0.10
Nodes (21): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, prettier, prettier-plugin-tailwindcss, tailwindcss (+13 more)

### Community 1 - "TypeScript Compiler Options"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 2 - "Next.js Docs And Agents"
Cohesion: 0.16
Nodes (15): Next.js Breaking Changes, generate-agent-files.js, next dev, Next.js Local Documentation, Next.js Agent Rules, app/page.tsx, create-next-app, Geist (+7 more)

### Community 3 - "Package Scripts And Meta"
Cohesion: 0.17
Nodes (11): name, packageManager, private, scripts, build, dev, format, format:check (+3 more)

### Community 4 - "TypeScript File Includes"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 5 - "Package Managers And Builds"
Cohesion: 0.25
Nodes (8): allowBuilds, es5-ext, unrs-resolver, bun, Development Server, npm, pnpm, yarn

### Community 6 - "Auth AI And Prisma"
Cohesion: 0.29
Nodes (7): @ai-sdk/openai-compatible, better-auth, dependencies, @ai-sdk/openai-compatible, better-auth, @prisma/client, @prisma/client

### Community 7 - "App Root Layout"
Cohesion: 0.40
Nodes (3): geistMono, geistSans, metadata

## Knowledge Gaps
- **89 isolated node(s):** `geistSans`, `geistMono`, `metadata`, `eslintConfig`, `nextConfig` (+84 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **30 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Auth AI And Prisma` to `Package Scripts And Meta`, `AI SDK Package`, `clsx Utility`, `Sandpack React`, `HeroUI React`, `HeroUI Styles`, `Hookform Resolvers`, `Monaco Editor`, `Monaco Editor React`, `Next.js Package`, `MDX Remote`, `URL State nuqs`, `Phosphor Icons`, `React Package`, `React Aria`, `React Aria Components`, `React Aria i18n`, `React Aria SSR`, `React Aria Utils`, `React DOM`, `React Hook Form`, `Rehype Pretty Code`, `Remark GFM`, `Shiki Highlighter`, `Tailwind Variants`, `Zod Validation`?**
  _High betweenness centrality (0.267) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Lint CSS Tooling` to `Package Scripts And Meta`?**
  _High betweenness centrality (0.124) - this node is a cross-community bridge._
- **What connects `geistSans`, `geistMono`, `metadata` to the rest of the system?**
  _89 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Lint CSS Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `TypeScript Compiler Options` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._