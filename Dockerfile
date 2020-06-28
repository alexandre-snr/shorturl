FROM node:14.4.0

RUN mkdir /app

WORKDIR /app
COPY . .
RUN yarn install

WORKDIR /app/client
RUN yarn install
RUN yarn build

WORKDIR /app
EXPOSE 8080
CMD yarn start
