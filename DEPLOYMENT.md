# 🚀 Deployment Guide

This document covers the deployment process for the Dumbmerch Backend.

## ☁️ Deployment Strategy

We recommend deploying to a cloud provider that supports Node.js (e.g., AWS EC2, DigitalOcean, Railway, or Render).

## 🛠️ Build Process

1.  **Generate Prisma Client**
    Ensure the Prisma client is generated to match the production environment.
    ```bash
    npx prisma generate
    ```

2.  **Compile TypeScript**
    Transpile the `.ts` files to `.js` in the `dist/` or `build/` folder.
    ```bash
    npm run build
    ```

## 📦 Production Startup

After building, start the application using the native Node.js runtime, not `ts-node`.

```bash
NODE_ENV=production node dist/app.js
```

## 🐧 Process Management (PM2)

For robust production hosting, use **PM2** to manage the process.

**Ecosystem File (`ecosystem.config.js`)**:
```javascript
module.exports = {
  apps : [{
    name   : "dumbmerch-backend",
    script : "./dist/app.js",
    env: {
      NODE_ENV: "production",
    }
  }]
}
```

**Commands**:
```bash
npm install -g pm2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 🐳 Docker Deployment

You can use Docker to containerize the application.

**Dockerfile**:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
```

**Build & Run**:
```bash
docker build -t dumbmerch-backend .
docker run -p 5000:5000 --env-file .env dumbmerch-backend
```
