#!/bin/sh

set -e
echo "# ~> publishing"

cd ${1}/back
yarn build
cp -rf ${1}/back/build/app.js ${1}/dist/back/app.js
cd ${1}
