# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first for caching
COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.ts ./
COPY postcss.config.js ./
COPY tailwind.config.ts ./

RUN npm install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Disable ESLint during Docker builds
ENV NEXT_DISABLE_ESLINT=1

# Build Next.js app
RUN npm run build

# Stage 2: Run
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "run", "start"]
