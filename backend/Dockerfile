FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json if exists
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose port your backend listens on (default 5000)
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]
