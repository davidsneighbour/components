#!/usr/bin/env bash

REQUIRED_TOOLS=(
  node
  export
  trap
)


for TOOL in "${REQUIRED_TOOLS[@]}"; do
  if ! command -v "${TOOL}" >/dev/null; then
    echo "${TOOL} is required... "
    exit 1
  fi
done

trap "{ echo 'Terminated with Ctrl+C'; }" SIGINT

FILE=.env
if [ -f "$FILE" ]; then
  echo "exporting .env"
  set -a
  # shellcheck source=/dev/null
  source "${FILE}"
  set +a
fi

# https://github.com/ozum/replace-between
node ./node_modules/replace-between/bin/replace-between.js \
  --source "${TEMPLATEPATH}"/readme/elements.md \
  --target README.md \
  --token ELEMENTS

node ./node_modules/replace-between/bin/replace-between.js \
  --source "${TEMPLATEPATH}"/readme/components.md \
  --target README.md \
  --token COMPONENTS
