# ======= ビルドステージ =======
FROM node:20-alpine AS builder

WORKDIR /app

# RUN adduser -D node
RUN chown -R node:node /app
USER node

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

CMD ["npm","run","dev","--","--host","0.0.0.0","--port","5173","--strictPort"]

# ======= 配信ステージ（変更なし） =======
FROM nginx:1.27-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
