FROM node:16.15.0

# Create the directory!
RUN mkdir -p /usr/hurs
WORKDIR /usr/hurs

# Copy and Install our bot
COPY package.json /usr/hurs
RUN npm install

# Our precious bot
COPY . /usr/hurs

# Start me!
CMD ["node", "index.js"]