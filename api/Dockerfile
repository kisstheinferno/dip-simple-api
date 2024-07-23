# Base image
FROM --platform=linux/amd64 node:18

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
CMD npm run migration:run && node dist/main.js

# export DOCKER_CLIENT_TIMEOUT=300
# export COMPOSE_HTTP_TIMEOUT=300

#fastest way to build the image and of memory saving
# Stage 1: Build the application
# FROM --platform=linux/amd64 node:18 AS builder

# # Create app directory
# WORKDIR /app

# # Install app dependencies
# COPY package*.json ./
# RUN npm install

# # Bundle app source
# COPY . .
# RUN npm run build

# # Stage 2: Create the final image
# FROM --platform=linux/amd64 node:18-alpine

# WORKDIR /app

# # Copy the build output from the builder stage
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/node_modules ./node_modules

# # Expose the port on which the app will run
# EXPOSE 3001

# # Start the server using the production build
# CMD ["npm", "run", "start:prod"]
