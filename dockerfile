FROM node:16.15.0

# Create the directory!
RUN mkdir -p /usr/hursbot
WORKDIR /usr/hursbot

# Copy and Install our bot
COPY package.json /usr/hursbot
RUN npm install

# Our precious bot
COPY . /usr/hursbot

# Start me!
CMD ["node", "index.js"]