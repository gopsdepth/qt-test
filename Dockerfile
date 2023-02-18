FROM node:18-alpine3.16 AS builder
WORKDIR /myweb

COPY package.json yarn.lock ./
RUN yarn

ENV PATH="./node_modules/.bin:$PATH"
COPY . ./
RUN ng build

FROM nginx:1.23.3-alpine
COPY --from=builder /myweb/dist/qt-test /usr/share/nginx/html