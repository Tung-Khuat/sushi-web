FROM node:latest

COPY . /src

WORKDIR /src

RUN npm install --production 
    
RUN npm run build

EXPOSE 3000

CMD node server.js