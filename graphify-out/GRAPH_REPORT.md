# Graph Report - .  (2026-08-18)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1513 nodes · 1509 edges · 167 communities (127 shown, 40 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8980919c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- compilerOptions
- Next.js
- Model Queries
- Driver Adapters
- Upgrade to Prisma ORM 7
- dependencies
- Prisma Compute Config
- create-prisma Compute Flow
- clsx
- @codesandbox/sandpack-react
- eslint.config.mjs
- SDK and API Automation
- "user"
- @hookform/resolvers
- @monaco-editor/react
- next
- next.config.ts
- Relation Queries
- nuqs
- @phosphor-icons/react
- react
- react-aria
- react-aria-components
- @react-aria/i18n
- @react-aria/ssr
- @react-aria/utils
- react-dom
- Removed Features
- bcryptjs
- Prisma CLI Reference
- shiki
- tailwind-variants
- zod
- postcss.config.mjs
- prettier.config.mjs
- Raw Queries
- Troubleshooting Prisma Compute
- Client Methods
- Filter Conditions and Operators
- Query Options
- prisma db push
- prisma dev
- prisma generate
- prisma studio
- Prisma Client API Reference
- Prisma Config
- prisma migrate dev
- prisma db seed
- Prisma Compute
- Environment Variables
- prisma db pull
- prisma init
- prisma migrate deploy
- Constructor Options
- Prisma Database Setup
- Prisma Accelerate Users
- ESM and CommonJS Support
- Schema Changes
- Transactions
- Workflow
- Prisma Compute Framework Readiness
- MongoDB Setup
- Prisma SQL Driver Adapter Implementation
- Core Workflows
- prisma db execute
- Prisma Platform CLI App Deploy
- MySQL Setup
- management-api
- prisma migrate diff
- prisma migrate reset
- PostgreSQL Setup
- Prisma Postgres Setup
- SQLite Setup
- SQL Server Setup
- create-db-cli
- api-basics
- prisma format
- prisma migrate resolve
- prisma validate
- CockroachDB Setup
- decision-stay-or-migrate
- console-and-connections
- management-api-sdk
- prisma migrate status
- next-mdx-remote
- react-hook-form
- migrations-mapping
- schema-contract-mapping
- Prisma MongoDB Upgrade Path
- endpoints
- prisma mcp
- remark-gfm
- client-api-mapping
- Service Tokens
- prisma debug
- Stack Bibliothèque
- Prisma Client Setup
- verify-cutover-checklist
- Prisma 7 Client Instantiation
- AI safety checkpoint for destructive commands
- prisma complete
- docker-dev.sh
- better-auth
- dotenv
- pg
- @prisma/adapter-pg
- @prisma/client
- @swc/helpers
- docker-migrate.sh
- entries/actions.ts
- Domaine Bibliothèque
- AppSideBar.tsx
- continual-learning-stop.mjs
- How to Fetch Documentation
- AGENTS.md memory updater
- UI Bibliothèque
- Prisma local (cette app)
- MDX + playgrounds
- mcp.json
- seed.ts
- Gate admin
- Server Actions + Zod 4
- AI SDK (quiz / révision)
- Auth (better-auth)
- Next.js 16 (cette app)
- docs-researcher.md
- Continual Learning
- Docker
- Mode exam
- Filtres URL (nuqs)
- Révision espacée (SM-2)
- Commits
- Prettier + Tailwind
- Recherche fiches
- Seed fiches
- @heroui/styles
- ai

## God Nodes (most connected - your core abstractions)
1. `Troubleshooting Prisma Compute` - 22 edges
2. `compilerOptions` - 16 edges
3. `RequireAdmin()` - 15 edges
4. `Prisma Client API Reference` - 14 edges
5. `Prisma Compute Framework Readiness` - 14 edges
6. `Upgrade to Prisma ORM 7` - 14 edges
7. `Prisma Platform CLI App Deploy` - 13 edges
8. `scripts` - 12 edges
9. `Prisma Database Setup` - 12 edges
10. `management-api` - 12 edges

## Surprising Connections (you probably didn't know these)
- `Next.js Documentation` --semantically_similar_to--> `Next.js Local Documentation`  [INFERRED] [semantically similar]
  README.md → AGENTS.md
- `AdminLayout()` --calls--> `RequireAdmin()`  [EXTRACTED]
  app/(admin)/layout.tsx → lib/admin.ts
- `Next.js` --conceptually_related_to--> `Next.js Agent Rules`  [INFERRED]
  README.md → AGENTS.md
- `pnpm` --conceptually_related_to--> `allowBuilds`  [INFERRED]
  README.md → pnpm-workspace.yaml
- `RootLayout()` --calls--> `getAdminForUser()`  [EXTRACTED]
  app/layout.tsx → lib/admin.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Development Server Package Managers** — readme_development_server, readme_npm, readme_yarn, readme_pnpm, readme_bun [EXTRACTED 1.00]
- **Next.js Learn More Resources** — readme_nextjs_documentation, readme_learn_nextjs, readme_nextjs_github [EXTRACTED 1.00]
- **pnpm allowBuilds Packages** — pnpm_workspace_allowbuilds, pnpm_workspace_es5_ext, pnpm_workspace_unrs_resolver [EXTRACTED 1.00]

## Communities (167 total, 40 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.05
Nodes (43): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, prettier, prettier-plugin-tailwindcss, prisma (+35 more)

### Community 1 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 2 - "Next.js"
Cohesion: 0.10
Nodes (23): Next.js Breaking Changes, generate-agent-files.js, next dev, Next.js Local Documentation, Next.js Agent Rules, allowBuilds, es5-ext, unrs-resolver (+15 more)

### Community 3 - "Model Queries"
Cohesion: 0.07
Nodes (27): aggregate, Aggregation Operations, Atomic operations, count, create, Create Operations, createMany, createManyAndReturn (+19 more)

### Community 4 - "Driver Adapters"
Cohesion: 0.07
Nodes (27): Accept self-signed certificates, After (v7), Available Adapters, Before (v6), Configuration, Connection Pool Configuration, Driver Adapters, Installation (+19 more)

### Community 5 - "Upgrade to Prisma ORM 7"
Cohesion: 0.08
Nodes (25): 1. Update package.json for ESM-first projects, 2. Update tsconfig.json, 3. Update schema.prisma, 4. Create prisma.config.ts, 5. Install a driver adapter (SQL providers only), 6. Update client instantiation, 7. Replace Prisma.validator with satisfies, 8. Run migrations and generate (+17 more)

### Community 6 - "dependencies"
Cohesion: 0.22
Nodes (9): @ai-sdk/openai-compatible, @heroui/react, monaco-editor, dependencies, @ai-sdk/openai-compatible, @heroui/react, monaco-editor, rehype-pretty-code (+1 more)

### Community 7 - "Prisma Compute Config"
Cohesion: 0.22
Nodes (9): App Fields, Basic Shape, Database Scope, File Names and Discovery, Generating a Config with `init`, Monorepos and Multi-App Repos, Precedence, Prisma Compute Config (+1 more)

### Community 9 - "create-prisma Compute Flow"
Cohesion: 0.22
Nodes (9): Addon Notes, Basic Commands, create-prisma Compute Flow, Failure Handling, Generated Deploy Script, Generated Files to Preserve, PostgreSQL and Database Behavior, Reference (+1 more)

### Community 13 - "SDK and API Automation"
Cohesion: 0.22
Nodes (8): Compute SDK, Management API Concepts, Prefer the CLI for App Workflows, Regions, Repository-snapshot detection, SDK and API Automation, SDK Build Strategies, Secrets and Redaction

### Community 14 - ""user""
Cohesion: 0.19
Nodes (13): "Admin", "User", "account", "session", "user", "verification", "Category", "Entry" (+5 more)

### Community 20 - "Relation Queries"
Cohesion: 0.08
Nodes (23): Connect existing, Count Relations, Create or connect, Create with relations, Delete related, Disconnect, every, Filter counted relations (+15 more)

### Community 30 - "Removed Features"
Cohesion: 0.08
Nodes (23): Alternatives, Auto-generate after migrate, Auto-seed after migrate, Automatic Behaviors Removed, CLI Flags Removed, Client Middleware, Common Middleware Patterns, Custom counter with extensions (+15 more)

### Community 32 - "Prisma CLI Reference"
Cohesion: 0.09
Nodes (21): AI Safety Checkpoint, Boundary: Platform and Compute, Bun Runtime, Client Generation, Command Categories, Current Command Behavior, Current Prisma CLI Setup, Database Operations (+13 more)

### Community 39 - "Raw Queries"
Cohesion: 0.09
Nodes (21): BigInt handling, Database-Specific Features, Date handling, Delete example, Dynamic table/column names, $executeRaw, Handling Results, Insert example (+13 more)

### Community 40 - "Troubleshooting Prisma Compute"
Cohesion: 0.09
Nodes (22): Accidental Prisma Postgres Provisioning, Auth Fails, Bun Entrypoint Missing, Compute Config Invalid, `create-prisma --yes` Did Not Deploy, Database Wiring or Schema Did Not Apply, Env Changes Did Not Apply, First Checks (+14 more)

### Community 41 - "Client Methods"
Cohesion: 0.10
Nodes (18): Add custom methods, Add model methods, Chain extensions, Client Methods, $connect(), $disconnect(), $extends(), Graceful shutdown (+10 more)

### Community 42 - "Filter Conditions and Operators"
Cohesion: 0.10
Nodes (20): AND (explicit), AND (implicit), Array Field Filters, Combined, Comparison, Equality, every, Filter Conditions and Operators (+12 more)

### Community 43 - "Query Options"
Cohesion: 0.10
Nodes (20): cursor, distinct, Filtered include, include, Include relation count, Multiple distinct fields, Negative take (reverse), Nested include (+12 more)

### Community 44 - "prisma db push"
Cohesion: 0.10
Nodes (19): Accept data loss, Basic push, Command, Common Patterns, Comparison with migrate dev, Examples, Follow-up Command, Force reset (+11 more)

### Community 45 - "prisma dev"
Cohesion: 0.10
Nodes (19): Background mode, Command, Configuration, Custom ports, Examples, Force remove (stops first), Instance Management, List all instances (+11 more)

### Community 46 - "prisma generate"
Cohesion: 0.10
Nodes (19): After schema changes, Basic generation, Bun Runtime, CI/CD pipeline, Command, Common Patterns, Compiler Build Tuning, Current Generator Behavior (+11 more)

### Community 47 - "prisma studio"
Cohesion: 0.10
Nodes (19): Command, Common Workflow, Custom port, Don't open browser, Edit Records, Examples, Features, Filter Data (+11 more)

### Community 48 - "Prisma Client API Reference"
Cohesion: 0.10
Nodes (19): Client Instantiation, Client Methods, Create records, Delete records, Filter Operators, Find records, How to Use, Model Query Methods (+11 more)

### Community 49 - "Prisma Config"
Cohesion: 0.10
Nodes (19): After (v7) - prisma.config.ts, Basic Configuration, Before (v6) - schema.prisma, Configuration Options, Custom Config Path, datasource.directUrl, datasource.shadowDatabaseUrl, datasource.url (+11 more)

### Community 50 - "prisma migrate dev"
Cohesion: 0.11
Nodes (18): After schema changes, Command, Common Patterns, Create and apply migration, Create without applying, Examples, Follow-up Commands, Full workflow (+10 more)

### Community 51 - "prisma db seed"
Cohesion: 0.11
Nodes (17): Best Practices, Command, Common Patterns, Common seed commands, Conditional seeding, Configuration, Current Workflow, Development reset (+9 more)

### Community 52 - "Prisma Compute"
Cohesion: 0.11
Nodes (18): 1. Command Verification, 2. Auth and Workspace Selection, 3. Framework Readiness, 4. Runtime Host and Port Binding, 5. Typed Compute Config, 6. Branch, Environment, and Database, 7. Deploy Operations, 8. SDK and API (+10 more)

### Community 53 - "Environment Variables"
Cohesion: 0.11
Nodes (17): 1. Install dotenv, 2. Import in prisma.config.ts, Application Code, Bun Users, CI/CD Considerations, Entry point, Environment Variables, Multiple .env Files (+9 more)

### Community 54 - "prisma db pull"
Cohesion: 0.12
Nodes (16): Basic introspection, Command, Examples, Force overwrite, Generated Schema Example, MongoDB Introspection, Options, Post-Introspection Cleanup (+8 more)

### Community 55 - "prisma init"
Cohesion: 0.12
Nodes (16): Add an example model, Basic initialization, Bun Runtime, Command, Examples, Generated Config (Bun), Generated Config (Node.js default), Generated Schema (+8 more)

### Community 56 - "prisma migrate deploy"
Cohesion: 0.12
Nodes (16): Basic deployment, Best Practices, Check status first, Command, Comparison with migrate dev, Configuration, Docker deployment, Error Handling (+8 more)

### Community 57 - "Constructor Options"
Cohesion: 0.12
Nodes (16): accelerateUrl (For Accelerate users), adapter (Required for the SQL provider workflow), Basic Instantiation, comments, Constructor Options, errorFormat, log, Log Events (+8 more)

### Community 58 - "Prisma Database Setup"
Cohesion: 0.12
Nodes (16): Bun Runtime, Configuration Files, Driver Adapters, How to Use, MongoDB, MySQL, PostgreSQL, Prisma Client Setup (Required) (+8 more)

### Community 59 - "Prisma Accelerate Users"
Cohesion: 0.12
Nodes (16): 1. Keep your Accelerate URL, 2. Install Accelerate extension, 3. Configure prisma.config.ts, 4. Instantiate client with accelerateUrl, Caching with Accelerate, Correct v7 Setup for Accelerate, Edge Runtime, Important (+8 more)

### Community 60 - "ESM and CommonJS Support"
Cohesion: 0.12
Nodes (16): Browser-Safe Types, Bun, "Cannot use import statement outside a module", CommonJS Projects, "ERR_REQUIRE_ESM", ESM and CommonJS Support, ESM Projects, File Extensions (+8 more)

### Community 61 - "Schema Changes"
Cohesion: 0.12
Nodes (15): 1. Provider name, 2. Output is required, 3. engineType changed, 4. moduleFormat is explicit when needed, After Schema Changes, Datasource Block, Example Output Paths, Generated Entrypoints (+7 more)

### Community 62 - "Transactions"
Cohesion: 0.13
Nodes (14): All or nothing, Best Practices, Handle errors, Interactive Transactions, Isolation levels, Keep transactions short, Nested Writes, OrThrow in Transactions (+6 more)

### Community 63 - "Workflow"
Cohesion: 0.13
Nodes (14): Error Handling, Prerequisites, Prisma Postgres Setup, Reference Files, Step 1: Authenticate, Step 2: List available regions, Step 3: Create a project with a database, Step 4: Create a named connection (optional) (+6 more)

### Community 64 - "Prisma Compute Framework Readiness"
Cohesion: 0.14
Nodes (14): Astro, Bun, Elysia, and Plain Source Servers, CLI-First Model, CLI Matrix, Custom Build Artifacts, Hono, NestJS, Next.js (+6 more)

### Community 65 - "MongoDB Setup"
Cohesion: 0.14
Nodes (13): 1. Schema Configuration, 2. Environment Variable, Common Issues, Current Verification Notes, Driver Adapters, ID Field Requirement, "Invalid ObjectID", Migrations vs Introspection (+5 more)

### Community 66 - "Prisma SQL Driver Adapter Implementation"
Cohesion: 0.14
Nodes (13): Commit and rollback, Contract snapshot, Error mapping, Factory, ownership, and shadow database, Priority rules, Prisma SQL Driver Adapter Implementation, Query implementation, Result mapping (+5 more)

### Community 67 - "Core Workflows"
Cohesion: 0.14
Nodes (13): 1. Console-first workflow, 2. Quick provisioning with create-db, 2b. Persistent databases with the Platform CLI, 3. Link an existing local project, 4. Programmatic provisioning with Management API, 5. Type-safe integration with Management API SDK, Core Workflows, How to Use (+5 more)

### Community 68 - "prisma db execute"
Cohesion: 0.15
Nodes (12): Command, Configuration, Current Option Surface, Examples, Execute from file, Execute from stdin, Execute `migrate diff` output, Limitations (+4 more)

### Community 69 - "Prisma Platform CLI App Deploy"
Cohesion: 0.15
Nodes (13): Agent Skill Installation, Auth and Project Binding, Build and Run Locally, Database and Env, Deploy, Deployment Story: GitHub vs CLI, Operations, Output Handling (+5 more)

### Community 70 - "MySQL Setup"
Cohesion: 0.15
Nodes (12): 1. Schema Configuration, 2. Config Configuration, 3. Environment Variable, Common Issues, Connection String Format, Driver Adapter, JSON Support, MySQL Setup (+4 more)

### Community 71 - "management-api"
Cohesion: 0.15
Nodes (12): API exploration, Authentication methods, Base URL, Current resource inventory, management-api, Notes, OAuth flow summary, Priority (+4 more)

### Community 72 - "prisma migrate diff"
Cohesion: 0.17
Nodes (11): Check for drift (CI), Command, Create baseline migration, Examples, Generate SQL for a schema change, Options, prisma migrate diff, Review pending migrations (+3 more)

### Community 73 - "prisma migrate reset"
Cohesion: 0.17
Nodes (11): Basic reset, Command, Configuration, Examples, Follow-up Steps, Force reset (CI/Automation), Options, prisma migrate reset (+3 more)

### Community 74 - "PostgreSQL Setup"
Cohesion: 0.17
Nodes (11): 1. Schema Configuration, 2. Config Configuration, 3. Environment Variable, "Authentication failed", "Can't reach database server", Common Issues, Connection String Format, Driver Adapter (+3 more)

### Community 75 - "Prisma Postgres Setup"
Cohesion: 0.17
Nodes (11): 1. Schema Configuration, 2. Config Configuration, Connection String, Driver Adapter, Edge/serverless option, Features, Overview, Prisma Postgres Setup (+3 more)

### Community 76 - "SQLite Setup"
Cohesion: 0.17
Nodes (11): 1. Schema Configuration, 2. Config Configuration, 3. Environment Variable, Common Issues, Connection String Format, "Database file not found", Driver Adapter, Limitations (+3 more)

### Community 77 - "SQL Server Setup"
Cohesion: 0.18
Nodes (10): 1. Schema Configuration, 2. Config Configuration, 3. Environment Variable, Common Issues, Connection String Format, Driver Adapter, "Login failed for user", Prerequisites (+2 more)

### Community 78 - "create-db-cli"
Cohesion: 0.18
Nodes (10): Command discovery (`--help`), Commands, Common patterns, create-db-cli, `create` options, Lifecycle and claim flow, Priority, Programmatic usage (library API) (+2 more)

### Community 79 - "api-basics"
Cohesion: 0.18
Nodes (10): api-basics, Base URL, Collection, Error codes by HTTP status, Error Responses, Pagination, Resource ID Prefixes, Response Envelope (+2 more)

### Community 80 - "prisma format"
Cohesion: 0.20
Nodes (9): Behavior, Command, Examples, Format default schema, Format specific schema, Options, prisma format, Use in Editor (+1 more)

### Community 81 - "prisma migrate resolve"
Cohesion: 0.20
Nodes (9): Command, Examples, Mark as Applied (Baselining), Mark as Rolled Back (Fixing Failures), Options, prisma migrate resolve, References, Use Cases (+1 more)

### Community 82 - "prisma validate"
Cohesion: 0.20
Nodes (9): Command, Common Errors, Examples, Options, prisma validate, Use in CI, Validate default schema, Validate specific schema (+1 more)

### Community 83 - "CockroachDB Setup"
Cohesion: 0.20
Nodes (9): 1. Schema Configuration, 2. Config Configuration, 3. Environment Variable, CockroachDB Setup, Common Issues, Driver Adapter, ID Generation, Prerequisites (+1 more)

### Community 84 - "decision-stay-or-migrate"
Cohesion: 0.20
Nodes (9): Bad, Blocker checks before migrating, decision-stay-or-migrate, Good, Priority, References, Stay-on-v6 hygiene, The facts the decision rests on (+1 more)

### Community 85 - "console-and-connections"
Cohesion: 0.20
Nodes (9): Adapter choices, Connection setup, console-and-connections, Console workflow, Linking an existing project, Local Studio, Priority, References (+1 more)

### Community 86 - "management-api-sdk"
Cohesion: 0.20
Nodes (9): Full SDK (OAuth + refresh), Install, management-api-sdk, OAuth SDK flow, Priority, References, Simple client (existing token), Why It Matters (+1 more)

### Community 87 - "prisma migrate status"
Cohesion: 0.22
Nodes (8): Check status, Command, Examples, Exit Codes, Options, prisma migrate status, What It Does, When to Use

### Community 90 - "migrations-mapping"
Cohesion: 0.22
Nodes (8): Bad, Good, migrations-mapping, Priority, Prisma Next: first-class, contract-driven migrations (Mongo included), References, v6: `db push` only, Why It Matters

### Community 91 - "schema-contract-mapping"
Cohesion: 0.22
Nodes (8): Bad, Environment requirements, Good, Priority, References, schema-contract-mapping, The mapping, Why It Matters

### Community 92 - "Prisma MongoDB Upgrade Path"
Cohesion: 0.22
Nodes (8): Decision table, Hand-off rule, If staying on v6: hygiene (a deliberate stay, not neglect), Prisma MongoDB Upgrade Path, Reference files, The decision, up front, The version landscape, Verified against

### Community 93 - "endpoints"
Cohesion: 0.22
Nodes (8): Create connection, Create project (with database), Delete database, Delete project, endpoints, Get database, List projects, List regions

### Community 94 - "prisma mcp"
Cohesion: 0.25
Nodes (7): Command, Notes, prisma mcp, References, Typical Use Cases, Usage, What It Does

### Community 96 - "client-api-mapping"
Cohesion: 0.25
Nodes (7): Bad, client-api-mapping, Good, Priority, References, The mapping, Why It Matters

### Community 97 - "Service Tokens"
Cohesion: 0.25
Nodes (7): auth, Creating a service token, OAuth 2.0 (for user-scoped access), Security practices, Service Tokens, Token scope, Using a service token

### Community 98 - "prisma debug"
Cohesion: 0.29
Nodes (6): Command, Example Output, Options, prisma debug, What It Does, When to Use

### Community 99 - "Stack Bibliothèque"
Cohesion: 0.22
Nodes (8): Dépendances déjà là (ne pas réinstaller), Interdit, MCP (docs live), Prisma / Docker, Routes, Skills liées, Stack Bibliothèque, Stack figée

### Community 100 - "Prisma Client Setup"
Cohesion: 0.29
Nodes (6): 1. Install dependencies, 2. Add generator block, 3. Generate Prisma Client, 4. Instantiate Prisma Client, 5. Use a single instance, Prisma Client Setup

### Community 101 - "verify-cutover-checklist"
Cohesion: 0.29
Nodes (6): Checklist, Ground rules, Priority, References, verify-cutover-checklist, Why It Matters

### Community 102 - "Prisma 7 Client Instantiation"
Cohesion: 0.29
Nodes (6): Basic instantiation, Common mistakes, Key rules, Prisma 7 Client Instantiation, Required packages, Usage in application code

### Community 103 - "AI safety checkpoint for destructive commands"
Cohesion: 0.50
Nodes (3): AI safety checkpoint for destructive commands, Reference, Required workflow

### Community 119 - "entries/actions.ts"
Cohesion: 0.06
Nodes (44): AdminLayout(), { GET, POST }, dynamic, geistMono, geistSans, metadata, RootLayout(), createCategory() (+36 more)

### Community 126 - "Domaine Bibliothèque"
Cohesion: 0.25
Nodes (7): Domaine Bibliothèque, Hiérarchie, Models (migration `20260818092801_stacks_categories_entries`), Nommage UI, Routes, Règles, Typos schema (ne pas « fixer » sans migration)

### Community 128 - "AppSideBar.tsx"
Cohesion: 0.09
Nodes (26): AuthState, signIn(), signUp(), LoginPage(), RegisterPage(), signInSchema, signUpSchema, AuthField() (+18 more)

### Community 136 - "continual-learning-stop.mjs"
Cohesion: 0.29
Nodes (11): getTranscriptMtimeMs(), INCREMENTAL_INDEX_PATH, loadState(), main(), parseBoolean(), parsePositiveInt(), readEnvValue(), readStdin() (+3 more)

### Community 137 - "How to Fetch Documentation"
Cohesion: 0.25
Nodes (7): Guidelines, How to Fetch Documentation, Step 1: Resolve the Library ID, Step 2: Select the Best Match, Step 3: Fetch the Documentation, Step 4: Use the Documentation, When to Use This Skill

### Community 138 - "AGENTS.md memory updater"
Cohesion: 0.33
Nodes (5): AGENTS.md memory updater, Extract, Fast path, Guardrails, Transcripts

### Community 143 - "UI Bibliothèque"
Cohesion: 0.29
Nodes (6): Admin CRUD, Contre-skills, Imports, Motion, Thème, UI Bibliothèque

### Community 144 - "Prisma local (cette app)"
Cohesion: 0.29
Nodes (6): Commandes, Fichiers, Prisma local (cette app), Schema métier, Skills Prisma génériques, Sécurité agent

### Community 145 - "MDX + playgrounds"
Cohesion: 0.33
Nodes (5): Données (`Entry`), Interdit, MDX + playgrounds, Ordre d’implémentation, Pages

### Community 146 - "mcp.json"
Cohesion: 0.33
Nodes (5): better-auth, context7, heroui, npx, @heroui/mcp

### Community 148 - "seed.ts"
Cohesion: 0.40
Nodes (3): counterFiles, pool, prisma

### Community 149 - "Gate admin"
Cohesion: 0.40
Nodes (4): Gate admin, Pattern, UI, État actuel

### Community 150 - "Server Actions + Zod 4"
Cohesion: 0.33
Nodes (5): Action, Formulaire client, Règles, Schema (Zod 4), Server Actions + Zod 4

### Community 151 - "AI SDK (quiz / révision)"
Cohesion: 0.40
Nodes (4): AI SDK (quiz / révision), Patterns, Persistance, Rôle

### Community 152 - "Auth (better-auth)"
Cohesion: 0.40
Nodes (4): Auth (better-auth), Fichiers, Patterns, UI

### Community 153 - "Next.js 16 (cette app)"
Cohesion: 0.40
Nodes (4): Conventions, Layouts, Next.js 16 (cette app), Routes existantes

### Community 154 - "docs-researcher.md"
Cohesion: 0.50
Nodes (3): Guidelines, Process, Your Task

### Community 156 - "Continual Learning"
Cohesion: 0.50
Nodes (3): Continual Learning, Guardrails, Workflow

### Community 157 - "Docker"
Cohesion: 0.50
Nodes (3): Dev, Docker, Prod

### Community 158 - "Mode exam"
Cohesion: 0.50
Nodes (3): Flux, Mode exam, Produit

### Community 159 - "Filtres URL (nuqs)"
Cohesion: 0.50
Nodes (3): Filtres URL (nuqs), Parsers, Règles

### Community 160 - "Révision espacée (SM-2)"
Cohesion: 0.50
Nodes (3): Algo (SuperMemo-2, mapping existant), Mutation, Révision espacée (SM-2)

## Knowledge Gaps
- **961 isolated node(s):** `STATE_PATH`, `INCREMENTAL_INDEX_PATH`, `context7`, `npx`, `@heroui/mcp` (+956 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **40 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `devDependencies`, `clsx`, `@codesandbox/sandpack-react`, `@hookform/resolvers`, `@monaco-editor/react`, `next`, `nuqs`, `@phosphor-icons/react`, `react`, `react-aria`, `react-aria-components`, `@react-aria/i18n`, `@react-aria/ssr`, `@react-aria/utils`, `react-dom`, `bcryptjs`, `shiki`, `tailwind-variants`, `zod`, `@heroui/styles`, `ai`, `next-mdx-remote`, `react-hook-form`, `remark-gfm`, `better-auth`, `dotenv`, `pg`, `@prisma/adapter-pg`, `@prisma/client`, `@swc/helpers`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `Troubleshooting Prisma Compute` connect `Troubleshooting Prisma Compute` to `prisma-compute/SKILL.md`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **What connects `STATE_PATH`, `INCREMENTAL_INDEX_PATH`, `context7` to the rest of the system?**
  _961 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.045454545454545456 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `Next.js` be split into smaller, more focused modules?**
  _Cohesion score 0.09881422924901186 - nodes in this community are weakly interconnected._
- **Should `Model Queries` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._