#Stage 1
FROM node:12.3.1-alpine AS builder

WORKDIR /app/

COPY ./ /app/

RUN npm install

RUN npm run build --prod


#Stage 2
FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/* /usr/share/nginx/html

EXPOSE 80

