FROM node:14.15.3-buster

RUN npm install -g npm@latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install