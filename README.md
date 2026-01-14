# Dumbmerch Backend

![Project Banner](https://via.placeholder.com/1200x300?text=Dumbmerch+Backend)

> A robust, scalable, and secure RESTful API for the Dumbmerch e-commerce platform.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-white)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5.x-teal)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.x-blue)](https://www.postgresql.org/)

---

## 🏗️ Backend Overview

The **Dumbmerch Backend** serves as the core logic layer for the Dumbmerch ecosystem. It handles data persistence, business rules, user authentication, and real-time communication. Built with performance and type safety in mind, it leverages Node.js with TypeScript and Prisma ORM.

## ✨ Features

- **🔐 Authentication & Authorization**: secure JWT-based auth with Role-Based Access Control (Admin/User).
- **🛒 E-commerce Logic**: Full support for products, categories, shopping carts, and transactions.
- **💳 Payment Integration**: Seamless integration with Midtrans Payment Gateway.
- **💬 Real-time Chat**: WebSocket support via Socket.io for instant messaging.
- **📁 Media Management**: Cloudinary integration for scalable image storage.
- **⚡ High Performance**: Efficient database queries and optimized API endpoints.

## 🛠️ Tech Stack

| Category          | Technology |
|-------------------|------------|
| **Runtime**       | [Node.js](https://nodejs.org/) |
| **Framework**     | [Express.js](https://expressjs.com/) |
| **Language**      | [TypeScript](https://www.typescriptlang.org/) |
| **Database**      | [PostgreSQL](https://www.postgresql.org/) |
| **ORM**           | [Prisma](https://www.prisma.io/) |
| **Validation**    | [Zod](https://zod.dev/) |
| **Real-time**     | [Socket.io](https://socket.io/) |
| **Payments**      | [Midtrans](https://midtrans.com/) |

## 🚀 Installation

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **PostgreSQL**: v14.0.0 or higher
- **npm** or **yarn**

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/dumbmerch-backend.git
   cd dumbmerch-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   *Edit `.env` with your database credentials and API keys. See [ENVIRONMENT.md](./ENVIRONMENT.md).*

4. **Database Migration**
   ```bash
   npx prisma migrate dev --name init
   ```

## 🏃‍♂️ Running the Server

### Development Mode
Runs the server with hot-reload (nodemon + ts-node).
```bash
npm run dev
```

### Production Build
Compiles TypeScript to JavaScript and runs the optimized build.
```bash
npm run build
npm start
```

## 📚 Documentation

We maintain detailed documentation for all aspects of the backend system.

| Document | Description |
|----------|-------------|
| [**ARCHITECTURE.md**](./ARCHITECTURE.md) | MVC structure, layers, and design patterns. |
| [**API_DOCUMENTATION.md**](./API_DOCUMENTATION.md) | Endpoints, request/response examples. |
| [**DATABASE_SCHEMA.md**](./DATABASE_SCHEMA.md) | Entity relationships and data models. |
| [**DEPLOYMENT.md**](./DEPLOYMENT.md) | Production deployment guide. |
| [**ENVIRONMENT.md**](./ENVIRONMENT.md) | Configuration guide. |
| [**TESTING.md**](./TESTING.md) | Testing strategies and commands. |
| [**STYLE_GUIDE.md**](./STYLE_GUIDE.md) | Code style and conventions. |
| [**CONTRIBUTING.md**](./CONTRIBUTING.md) | Contribution guidelines. |
| [**SECURITY.md**](./SECURITY.md) | Security policies and reporting. |
| [**CODE_OF_CONDUCT.md**](./CODE_OF_CONDUCT.md) | Community standards. |
| [**CHANGELOG.md**](./CHANGELOG.md) | Version history. |
| [**ROADMAP.md**](./ROADMAP.md) | Future plans. |
| [**DISCLAIMER.md**](./DISCLAIMER.md) | Liability and usage terms. |
| [**LICENSE**](./LICENSE) | MIT License details. |

## 🔐 API Access & Security

- **Authentication**: All protected endpoints require a Bearer Token in the `Authorization` header.
- **Rate Limiting**: API requests are limited to prevent abuse (default: 100 req/min).
- **CORS**: Configured to allow requests only from trusted frontend domains.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

## 👨‍💻 Maintainer

**Dumbmerch Backend Team**
*Powering the future of commerce.*
