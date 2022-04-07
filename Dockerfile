FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# Production install
# RUN npm ci --only=production

# Bundle App source
COPY . .

EXPOSE 8300
CMD [ "npm", "start" ]