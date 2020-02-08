#!/bin/bash

sed -i "s/\"version\": \".*\",/\"version\": \"$1\",/g" package.json
git add package.json
git commit -m "Preparing next dev cycle."
git push
