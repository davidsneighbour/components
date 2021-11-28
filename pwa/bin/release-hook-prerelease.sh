#!/usr/bin/env bash

hugo mod get -u ./...
hugo mod tidy

# create pwa files
npm run build
git add static

git add go.mod
