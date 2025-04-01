FROM node:23

WORKDIR /app

COPY . .

RUN npm install

RUN npm run dev

EXPOSE 3001

CMD ['npm', 'start']