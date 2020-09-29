FROM node:alpine

COPY package*.json ./
RUN npm install
COPY reading-time.js ./
# override base image
ENTRYPOINT ["node", "reading-time.js"]
CMD [""]
