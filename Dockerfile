FROM node:14.4.0

RUN mkdir /app

WORKDIR /app
COPY . .
RUN yarn install

WORKDIR /app/client
RUN yarn install
RUN yarn build

WORKDIR /app

ENV PORT 8000

EXPOSE 8080
VOLUME /app/db.json

CMD yarn start
