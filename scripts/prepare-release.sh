#!/bin/bash

sed -i "s/\"version\": \".*\",/\"version\": \"$1\",/g" package.json
git add package.json
git commit -m "Preparing release."
git tag -a "v$1" -m "Tagged v$1"
git push && git push --tags
