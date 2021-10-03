#!/usr/bin/env bash

# declare path to this script
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 || exit ; pwd -P )"

# TODO read component names into array
# TODO read replacement configuration into array

# remove replacement scripts
if test -f "$SCRIPTPATH"/replacements; then
  while read -ra __; do
    go mod edit -dropreplace "${__[0]}"
  done < "$SCRIPTPATH"/replacements
fi

hugo mod get -u ./...
hugo mod tidy

if test -f "$SCRIPTPATH"/replacements; then
  while read -ra __; do
    go mod edit -replace "${__[0]}"="${__[1]}"
  done < "$SCRIPTPATH"/replacements
fi

if test -f "$SCRIPTPATH"/components; then
  while read -ra __; do
    GOMOD=${__[0]}/go.mod
    if test -f "$GOMOD"; then git add "$GOMOD"; fi;
    GOSUM=${__[0]}/go.sum
    if test -f "$GOSUM"; then git add "$GOSUM"; fi;
  done < "$SCRIPTPATH"/components
fi
