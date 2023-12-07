FROM node:alpine AS build

# Install pnpm and turbo
RUN npm i -g pnpm turbo

WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Run build
COPY . ./
RUN turbo run build

# Run dev
COPY .next ./.next
CMD ["turbo", "run", "dev"]
