FROM node

WORKDIR /src

COPY . .

ExPOSE 4000

CMD node server.js
