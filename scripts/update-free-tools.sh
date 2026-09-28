#!/usr/bin/env bash
#
# Re-sync the free-tools calculators from a new drop by the tools team.
#
#   ./scripts/update-free-tools.sh ~/Downloads/free-tools-main.zip
#   ./scripts/update-free-tools.sh ~/some/unzipped/free-tools-main
#   ./scripts/update-free-tools.sh --rebuild     # rebuild what is vendored
#
# Their code is never edited. The source is vendored verbatim under
# external/free-tools and the static export is published to public/tools.
# See external/free-tools/README-INTEGRATION.md.
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VENDOR="$ROOT/external/free-tools"
PUBLISH="$ROOT/public/tools"
ENV_FILE="$ROOT/.env.free-tools"
SRC="${1:-}"

step() { printf "\n\033[1m==> %s\033[0m\n" "$1"; }
warn() { printf "\033[33mWarning:\033[0m %s\n" "$1"; }

build_from_source() {
  # Their hooks/analytics.ts throws at import time when NEXT_PUBLIC_PIXEL_ID is
  # missing, which takes the whole page down at hydration. It is inlined at
  # build time, so it has to be present here or the export is dead on arrival.
  if [ -f "$ENV_FILE" ]; then
    set -a; . "$ENV_FILE"; set +a
  fi
  if [ -z "${NEXT_PUBLIC_PIXEL_ID:-}" ]; then
    echo "NEXT_PUBLIC_PIXEL_ID is not set and $ENV_FILE is missing." >&2
    echo "Their build throws without it. Ask the tools team for the value." >&2
    exit 1
  fi

  step "Installing dependencies"
  npm --prefix "$VENDOR" install --no-audit --no-fund

  step "Building the static export"
  rm -rf "$VENDOR/out"
  NEXT_PUBLIC_PIXEL_ID="$NEXT_PUBLIC_PIXEL_ID" npm --prefix "$VENDOR" run build
  [ -d "$VENDOR/out" ] || { echo "Build produced no out/ directory." >&2; exit 1; }
  BUILT="$VENDOR/out"
}

REBUILD=0
[ "$SRC" = "--rebuild" ] && { REBUILD=1; SRC=""; }

BUILT=""

if [ -n "$SRC" ]; then
  SRC="${SRC/#\~/$HOME}"
  [ -e "$SRC" ] || { echo "No such path: $SRC" >&2; exit 1; }

  TMP="$(mktemp -d)"
  trap 'rm -rf "$TMP"' EXIT

  if [ -f "$SRC" ]; then
    step "Unpacking $(basename "$SRC")"
    unzip -q "$SRC" -d "$TMP"
  else
    step "Copying $(basename "$SRC")"
    cp -R "$SRC" "$TMP/"
  fi

  NEW="$(find "$TMP" -maxdepth 3 -name package.json -not -path "*/node_modules/*" \
         -exec dirname {} \; | head -1)"
  [ -n "$NEW" ] || { echo "Could not find a package.json in the drop." >&2; exit 1; }

  step "Replacing external/free-tools"
  rm -rf "$VENDOR"; mkdir -p "$VENDOR"
  rsync -a --exclude node_modules --exclude .next --exclude out "$NEW/" "$VENDOR/"

  # Prefer the build they shipped: it is the artefact they tested, with their
  # own env baked in. Rebuilding here would silently drop anything we do not
  # know about. Only build ourselves if the drop has no out/.
  if [ -d "$NEW/out" ]; then
    step "Using the export shipped in the drop"
    BUILT="$NEW/out"
  else
    warn "Drop has no out/ — building from source instead."
    build_from_source
  fi
else
  [ -d "$VENDOR" ] || { echo "Nothing vendored yet — pass the path to a drop." >&2; exit 1; }
  [ "$REBUILD" = 1 ] || { echo "Pass a drop to sync, or --rebuild to rebuild." >&2; exit 1; }
  build_from_source
fi

step "Publishing to public/tools"
rm -rf "$PUBLISH"
cp -R "$BUILT" "$PUBLISH"

# Re-apply our 2026 theme overlay. Their code is never edited, so the restyle
# lives in styles/tools-v2-theme.css and is linked into the freshly published
# pages here — which is what makes it survive a new drop.
step "Applying the 2026 theme overlay"
node "$ROOT/scripts/apply-tools-theme.mjs"

# basePath is what mounts the export at /tools. Without it every asset URL
# points at the site root and the pages render bare.
grep -q 'basePath:.*"/tools"' "$VENDOR/next.config.ts" 2>/dev/null \
  || warn "basePath \"/tools\" not found in their next.config.ts — check with the tools team."

# The pixel throw is silent in CI but fatal in the browser, so check the artefact.
if grep -rq "NEXT_PUBLIC_PIXEL_ID environment variable is not set" "$PUBLISH/_next/static/chunks" 2>/dev/null \
   && ! grep -rq "NEXT_PUBLIC_PIXEL_ID" /dev/null 2>/dev/null; then
  if ! grep -roh "\"[0-9]\{15,16\}\"" "$PUBLISH/_next/static/chunks" 2>/dev/null | grep -q .; then
    warn "No pixel id found in the published bundle — the pages will crash on load."
  fi
fi

step "Published"
find "$PUBLISH" -name index.html | sed "s|$PUBLISH|  /tools|;s|/index.html|/|" | sort | grep -v '/404/'
printf "\nThese are hand-listed in components/layout/navData.ts — compare, then commit\n"
printf "public/tools and external/free-tools.\n"
printf "\nIf their markup changed a lot, eyeball a page or two: the theme in\n"
printf "styles/tools-v2-theme.css targets classes their build emits.\n"
