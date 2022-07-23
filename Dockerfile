#Stage 1
FROM node:12.3.1-alpine AS builder

WORKDIR /app/

COPY ./ /app/

RUN npm install

RUN npm run build


#Stage 2
FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/* /usr/share/nginx/html

EXPOSE 80

