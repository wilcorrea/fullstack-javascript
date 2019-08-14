#!/bin/sh

# $(getent passwd 1000 | cut -d: -f1)\
docker run\
 --rm\
 -it\
 -v $(pwd)/../../back:/var/www/app\
 -w /var/www/app\
 -u 1000\
 -p 4183:4183\
 node:10-alpine sh