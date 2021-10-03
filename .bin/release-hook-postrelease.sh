#!/usr/bin/env bash

# declare path to this script
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 || exit ; pwd -P )"

# retrieve new version number
NEW_VERSION="$(cat ".version")"

# tag version numbers for all componnets
if test -f "$SCRIPTPATH"/components; then
  while read -ra __; do
    git tag "${__[0]}/v${NEW_VERSION}"    
  done < "$SCRIPTPATH"/components
fi

# send all tags to remote
git push --follow-tags origin main
git push --tags
