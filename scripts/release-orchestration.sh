#!/bin/bash

if [ $# -ne 2 ]; then
  echo 'Usage: ./release-orchestration.sh RELEASE_VERSION NEXT_VERSION'
  exit 1
fi

./scripts/prepare-release.sh $1
./scripts/prepare-dev.sh "$2-beta"
