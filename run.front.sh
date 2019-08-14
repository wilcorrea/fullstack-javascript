#!/bin/sh

# $(getent passwd 1000 | cut -d: -f1)\
docker run\
 --rm\
 -it\
 -v $(pwd)/front:/var/www/app\
 -w /var/www/app\
 -u 1000\
 node:10-alpine ${@}