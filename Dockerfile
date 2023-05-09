FROM node:16.19.1-alpine

WORKDIR /usr/src/app

COPY . .

RUN apk update && apk upgrade
RUN apk add git

RUN npm install && \
    npm run build && \
    ls -l

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]