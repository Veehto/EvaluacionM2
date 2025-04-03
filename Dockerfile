# Use the official Node.js image as the base
FROM node:22.14.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the application will run on
EXPOSE 5173
EXPOSE 3001

# Use an environment variable to determine the command to run
# Default to production mode
ENV NODE_ENV=production

# Start the application
# CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm run build && npm run preview; else npm run dev -- --host; fi"]
CMD ["sh", "-c", "npm run build && npm run server & npm run preview -- --host"]