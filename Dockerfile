FROM node:alpine AS build

WORKDIR /app
RUN npm install -g pnpm astro

ENV pnpm_home="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . ./
RUN pnpm run build

CMD ["pnpm", "run", "dev"]