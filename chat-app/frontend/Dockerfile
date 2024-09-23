# Use the Node.js official image
FROM node:16

# Create app directory and copy source files
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Expose port 3000 and run the app
EXPOSE 3002
CMD ["node", "index.js"]
