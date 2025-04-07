# Use the official Node.js image as the base
FROM node:22.14.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install only production dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the application will run on
EXPOSE 4173

# Start the production server
CMD ["sh", "-c", "npm run build && npm run preview -- --host"]