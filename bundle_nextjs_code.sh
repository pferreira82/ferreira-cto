#!/usr/bin/env bash
# bundle_nextjs_code.sh
# Create a single text file containing your Next.js source code and SVGs,
# annotated with file paths, excluding setup and environment files.

set -euo pipefail

ROOT="${1:-.}"                          # project root (default: current dir)
OUTFILE="${2:-nextjs_code_bundle.txt}"  # output file (default name)

# Normalize ROOT to an absolute path (and strip trailing slash)
ROOT="$(cd "$ROOT" && pwd)"

# Start fresh
: > "$OUTFILE"

# Helpful note at top
{
  echo "# Next.js Code & SVG Bundle"
  echo "# Project root: $ROOT"
  echo "# Generated: $(date -u +'%Y-%m-%dT%H:%M:%SZ')"
  echo
} >> "$OUTFILE"

# Build the find command:
#  - Prune heavy/irrelevant dirs (node_modules, .git, .next, etc.)
#  - Include common source/code/data extensions + SVG
#  - Exclude setup/config/env/lock files
#  - Publicly include *.svg (vector assets)
# Notes:
#  - We purposely skip package.json, tsconfig, next.config.*, tailwind/postcss configs,
#    lockfiles, Docker* and .env* files.
#  - Adjust patterns to your taste.

find "$ROOT" \
  -type d \( \
      -name node_modules -o \
      -name .git -o \
      -name .next -o \
      -name out -o \
      -name build -o \
      -name dist -o \
      -name coverage -o \
      -name .vercel -o \
      -name .idea -o \
      -name .vscode \
    \) -prune -o \
  -type f \( \
      -name "*.ts" -o -name "*.tsx" -o \
      -name "*.js" -o -name "*.jsx" -o \
      -name "*.mjs" -o -name "*.cjs" -o \
      -name "*.css" -o -name "*.scss" -o -name "*.sass" -o \
      -name "*.md"  -o -name "*.mdx"  -o \
      -name "*.json" -o \
      -name "*.yml" -o -name "*.yaml" -o \
      -name "*.svg" \
    \) \
  ! -name "package.json" \
  ! -name "package-lock.json" \
  ! -name "yarn.lock" \
  ! -name "pnpm-lock.yaml" \
  ! -name "bun.lockb" \
  ! -name "tsconfig.json" \
  ! -name "jsconfig.json" \
  ! -name "next.config.js" \
  ! -name "next.config.mjs" \
  ! -name "next.config.ts" \
  ! -name "postcss.config.js" \
  ! -name "tailwind.config.js" \
  ! -name "tailwind.config.ts" \
  ! -name "Dockerfile" \
  ! -name "docker-compose.*" \
  ! -name ".env" \
  ! -name ".env.*" \
  ! -name ".env.local" \
  ! -name ".env.development" \
  ! -name ".env.production" \
  -print0 \
| while IFS= read -r -d '' FILE; do
    # Compute a pretty relative path
    REL="${FILE#$ROOT/}"

    {
      echo "===== FILE: $REL ====="
      # Use cat to output contents verbatim; SVGs are text so this is fine.
      cat "$FILE"
      echo    # ensure trailing newline
      echo "===== END FILE: $REL ====="
      echo
    } >> "$OUTFILE"
  done

echo "Wrote bundle to: $OUTFILE"

