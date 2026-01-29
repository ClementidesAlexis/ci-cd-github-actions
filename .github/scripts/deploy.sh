#!/bin/bash
set -e

IMAGE="ghcr.io/${REPO}:${SHA}"

docker pull $IMAGE

docker rm -f app || true

docker run -d \
  --name app \
  -p 3000:3000 \
  $IMAGE
