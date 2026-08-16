#!/bin/sh
set -eu

cd "$(dirname "$0")/.."

run() {
  docker compose -f docker-compose.dev.yml "$@"
}

if docker info >/dev/null 2>&1; then
  run "$@"
  exit 0
fi

# Cursor / un terminal ouvert avant `usermod -aG docker` n'a pas le groupe.
newgrp docker <<EOF
docker compose -f docker-compose.dev.yml $*
EOF
