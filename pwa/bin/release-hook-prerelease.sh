#!/usr/bin/env bash

# declare path to this script
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 || exit ; pwd -P )"

# remove replacement scripts
if test -f "$SCRIPTPATH"/replacements; then
  while read -ra __; do
    go mod edit -dropreplace "${__[0]}"
  done < "$SCRIPTPATH"/replacements
fi

hugo mod get -u ./...
hugo mod tidy

# create pwa files
npm run build
git add static

if test -f "$SCRIPTPATH"/replacements; then
  while read -ra __; do
    go mod edit -replace "${__[0]}"="${__[1]}"
  done < "$SCRIPTPATH"/replacements
fi

if test -f go.mod; then git add "$GOMOD"; fi;
if test -f go.sum; then git add "$GOSUM"; fi;
