# Stage 1: Build React application
FROM node:14 as build
WORKDIR /app
ENV NODE_ENV=production

# Install react-scripts globally
RUN npm install -g react-scripts

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the production build using NGINX
FROM nginx:alpine

# Copy the built React application from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Remove default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Command to start NGINX server
CMD ["nginx", "-g", "daemon off;"]
