#!/bin/sh
set -e

if [ -f prisma/migrations/migration_lock.toml ]; then
  pnpm exec prisma migrate deploy
else
  echo "Aucune migration Prisma pour le moment, skip."
fi
