FROM node:12.2.0-alpine

ENV PORT 3000
ENV MONGODBURL
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

CMD fastify start -l info app.js
