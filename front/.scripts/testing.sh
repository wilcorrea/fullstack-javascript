#!/bin/sh

set -e
echo "# ~> testing"

cd ${1}/front
yarn test
cd ${1}
