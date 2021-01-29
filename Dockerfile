FROM node:latest

COPY . /src

WORKDIR /src

RUN npm install --production \
    npm run build

EXPOSE 3000

CMD node server.js