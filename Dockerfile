FROM node:boron

WORKDIR /usr/src/app

COPY package.json .
#COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4200:4200
CMD [ "npm", "start" ]
