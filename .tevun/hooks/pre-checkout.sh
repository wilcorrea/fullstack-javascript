#!/usr/bin/env bash

echo " ~> [hooks\pre-checkout.sh] on [${1}, ${2}]"

cd ${1}

# docker-compose down
