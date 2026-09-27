# TODO: Create a multi-stage Docker build for your React app

# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# TODO: Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# TODO: Copy source code and build the application
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# TODO: Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# TODO: Configure nginx for SPA routing (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]