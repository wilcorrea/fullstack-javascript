#!/bin/sh

set -e
echo "# ~> publishing"

cd ${1}/front
yarn build
cp -rf ${1}/front/dist/* ${1}/dist/front
cd ${1}
