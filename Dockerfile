FROM node:alpine AS build

RUN npm i -g pnpm
RUN npm i -g turbo
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . ./
RUN turbo run build

# Run dev
COPY .next ./.next
CMD ["turbo", "run", "dev"]
