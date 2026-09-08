FROM node:26-alpine3.23

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "dev"]