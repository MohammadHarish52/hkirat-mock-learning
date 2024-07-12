FROM node:20

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install
RUN npm run build
RUN npx prisma generate

COPY . .


EXPOSE 3000

CMD ["node" , "dist/index.js"]
