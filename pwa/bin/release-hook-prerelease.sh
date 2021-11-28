#!/usr/bin/env bash

./bin/dnb-readme-generator.sh
git add README.md

hugo mod get -u ./...
hugo mod tidy

# create pwa files
npm run build
git add static

git add go.mod
