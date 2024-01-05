# Author: Chambrin Alexandre
# Date: 2023/12/27
# Description: Dockerfile for the nodejs image

# Base image
FROM node:18-alpine
# Working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy source code
COPY . .
# Compile source code
RUN npm run build
# Expose port 3000
EXPOSE 3000
# Run the app
CMD ["npm", "start"]