# Step 1: Builder
FROM node:20.19.0-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copy and install deps
COPY . .
RUN pnpm install
RUN pnpm run build

# Step 2: Serve with nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
