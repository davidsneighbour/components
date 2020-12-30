#!/usr/bin/env bash

REQUIRED_TOOLS=(
  git
  cp
  rm
  sed
)

# shellcheck disable=SC2068
for tool in ${REQUIRED_TOOLS[@]}; do
  if ! command -v "${tool}" >/dev/null; then
    echo "Tool ${tool} is required. Exiting"; exit 1
  fi
done

# TODO cleanup $1 and make it `a-z0-9-` only
# TODO add some screaming branding (see booka dev scripts)
echo "Trying to create component $1"

# create directory
if [ -d "$1" ]
then
  echo "Directory $1 already exists. Nope. Not doing that. Get your things sorted out!"
else

  # create component directory
  mkdir "$1";

  # copy over all required files
  cp -r "$(pwd)"/.template/. "$(pwd)"/"$1"

  # go into directory
  cd "$1" || exit

  # replace component name
  # +++pLACEHOLDER+++ will be replaced with a first character uppercased component name
  # +++PLACEHOLDER+++ will be replaced with an all lowercased component name
  sed -i "s/+++pLACEHOLDER+++/${1^}/g" *
  sed -i "s/+++PLACEHOLDER+++/${1,,}/g" *

  rm -rf partials

  # initialize release system
  npm install
  git add ./
  git commit -m "chore: initial commit of $1"
  npm run release
  cd ..

fi

echo "Next Tasks:"
echo "- add the new component to .github/dependabot.yml"
echo "- write README.md of the component"
echo "- add component files (obviously)"

# done and out
echo "Completed in ${SECONDS}s"
