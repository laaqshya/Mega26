FROM node:24-alpine
WORKDIR /app
COPY server.mjs package.json ./
COPY web ./web
ENV NODE_ENV=production
EXPOSE 8080
CMD ["node", "server.mjs"]
