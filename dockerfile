FROM node:16.15.0
RUN mkdir -p /usr/hurs
WORKDIR /usr/hurs
COPY package.json /usr/hurs
RUN npm install
COPY . /usr/hurs
CMD ["node", "index.js"]