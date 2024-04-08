FROM node:14
# WORKDIR /usr/src/app
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Assume you need an API_KEY secret for the build process
ARG API_KEY
ENV API_KEY=${API_KEY}

RUN npm run build
