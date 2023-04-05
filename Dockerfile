FROM node:16.20.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/app
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=localhost
ENV NUXT_PORT=3000

CMD ["npm", "start"]