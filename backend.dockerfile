# based on https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
# Install dependencies only when needed
FROM node:16-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json apps/*/package-lock.json packages/*/package-lock.json ./
RUN npm ci

# Production image, copy all the files and run Directus
FROM node:16-alpine AS runner
ENV NODE_ENV production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
WORKDIR /app/apps/backend
COPY apps/backend .

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 directus

USER directus

EXPOSE 5000
ENV PORT 5000

CMD npm start