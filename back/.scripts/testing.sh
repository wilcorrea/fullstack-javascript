#!/bin/sh

set -e
echo "# ~> testing"

cd ${1}/back
yarn test
cd ${1}
