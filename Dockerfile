FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000

CMD ["node", "src/index.js"]
