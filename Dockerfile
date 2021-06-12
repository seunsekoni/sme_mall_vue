FROM node:12.18.3-alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json ./app/

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "serve"]