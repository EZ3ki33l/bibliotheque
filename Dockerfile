FROM node:22-alpine AS base

RUN apk add --no-cache \
        libc6-compat \
        openssl \
    && corepack enable \
    && corepack prepare pnpm@11.22.0 --activate

WORKDIR /app


FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile


FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV DATABASE_URL=postgresql://build:build@localhost:5432/build
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm exec prisma generate
RUN pnpm build


FROM base AS migrator

COPY --from=deps /app/node_modules ./node_modules
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY prisma.config.ts ./
COPY prisma ./prisma
COPY scripts/docker-migrate.sh ./scripts/docker-migrate.sh

RUN chmod 0755 ./scripts/docker-migrate.sh

CMD ["./scripts/docker-migrate.sh"]


FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]