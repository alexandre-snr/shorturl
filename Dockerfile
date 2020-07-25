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
ENV FRONTEND_HOSTNAME localhost

EXPOSE 8000
VOLUME /app/store

CMD yarn start
