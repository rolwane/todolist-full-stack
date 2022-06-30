FROM node:16-alpine

WORKDIR /usr/app/backend

COPY package.json /usr/app/backend/

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "dev" ]