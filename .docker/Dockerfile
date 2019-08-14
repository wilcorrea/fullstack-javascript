FROM node:10-alpine

RUN set -xe && apk add --no-cache bash git openssh

RUN mkdir -p /var/www/app && mkdir /var/www/app/front && mkdir /var/www/app/back

COPY ./back/package.json /var/www/app/back/package.json
COPY ./back/yarn.lock /var/www/app/back/yarn.lock
RUN cd /var/www/app/back && yarn install

COPY ./front/package.json /var/www/app/front/package.json
COPY ./front/yarn.lock /var/www/app/front/yarn.lock
RUN cd /var/www/app/front && yarn install

RUN yarn global add @vue/cli-service-global
