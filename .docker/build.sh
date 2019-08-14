#!/usr/bin/env bash

function __copy
{
  if [[ -d ./${1} ]]; then
      rm -rf ./${1}
  fi
  mkdir ./${1}
  cp -rf ../${1}/package.json ./${1}
  cp -rf ../${1}/yarn.lock ./${1}
}

__copy back
__copy front

docker build -t wilcorrea/fullstack-javascript .
docker tag wilcorrea/fullstack-javascript wilcorrea/fullstack-javascript:1.4
docker push wilcorrea/fullstack-javascript:1.4
