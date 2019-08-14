#!/bin/sh

# $(getent passwd 1000 | cut -d: -f1)\
docker run\
 --rm\
 -it\
 -v $(pwd)/front:/var/www/app\
 -w /var/www\
 -u 1000\
 -p 1981:1981\
 -p 8000:8000\
 lyseontech/vue:v3.8.2 vue ui --headless -p 8000 -H 0.0.0.0