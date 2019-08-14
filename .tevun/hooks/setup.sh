#!/usr/bin/env bash

echo " ~> [hooks\setup.sh] on [${1}, ${2}]"

cd ${1}

cp .env.production .env
cp docker-compose.yml.production docker-compose.yml
