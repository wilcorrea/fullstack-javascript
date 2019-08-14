#!/usr/bin/env bash

echo " ~> [hooks\post-checkout.sh] on [${1}, ${2}]"

cd ${1}

# docker-compose rm
# docker-compose up -d
docker-compose restart
