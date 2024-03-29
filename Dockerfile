FROM node:18.12.1-buster-slim AS builder


COPY package.json package-lock.json ./
COPY tsconfig.json tsconfig.json ./
COPY public/ public/
COPY src/ src/

RUN npm ci
RUN npm run build

FROM caddy:latest

COPY --from=builder build /srv
COPY  Caddyfile /etc/caddy/Caddyfile
