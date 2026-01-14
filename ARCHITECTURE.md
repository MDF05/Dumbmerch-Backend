# 🏗️ Backend Architecture

This document describes the architectural design of the Dumbmerch Backend.

## 🏛️ Design Pattern

The application follows a **Modular Monolith** architecture with a **Controller-Service-Repository (CSR)** pattern (implemented via Prisma as the data access layer). This ensures separation of concerns and maintainability.

```mermaid
graph TD
    Client[Client (Frontend/Mobile)] -->|HTTP Request| Router
    Router -->|Route Handler| Controller
    Controller -->|Business Logic| Service
    Service -->|Data Access| Prisma[Prisma ORM]
    Prisma -->|Query| DB[(PostgreSQL)]
```

### Layers

1.  **Presentation Layer (Routes & Controllers)**
    -   **Routes**: Define API endpoints and attach middleware (Auth, Validation).
    -   **Controllers**: Handle incoming HTTP requests, validate input using Zod, and send HTTP responses. They contain minimal business logic.

2.  **Business Logic Layer (Services)**
    -   Contains core business rules (e.g., "User cannot buy out-of-stock item").
    -   Orchestrates data operations.

3.  **Data Access Layer (Prisma Client)**
    -   Interfaces directly with the PostgreSQL database.
    -   Provides type-safe query building.

## 📂 Directory Structure

```plaintext
src/
├── app.ts              # App entry point (Express setup)
├── config/             # Configuration (DB connection, Env variables)
├── V1/                 # API Version 1
│   ├── routes/         # Express routers
│   ├── controllers/    # Request handlers
│   ├── services/       # Business logic (optional if logic is simple)
│   ├── middlewares/    # Custom middlewares (Auth, Error Handling)
│   ├── utils/          # Helper functions (JWT, Hashing)
│   ├── dto/            # Data Transfer Objects (Validation schemas)
│   └── interfaces/     # TypeScript interfaces
└── prisma/
    └── schema.prisma   # Database schema definition
```

## 🔄 Data Flow

1.  **Request**: Client sends `POST /api/v1/login`.
2.  **Middleware**: `loggerMiddleware` logs the request.
3.  **Router**: Matches path to `AuthController.login`.
4.  **Controller**:
    -   Parses `req.body`.
    -   Validates schema with Zod.
    -   Calls `AuthService.login(email, password)`.
5.  **Service**:
    -   Checks if user exists via Prisma.
    -   Compares password hashes.
    -   Generates JWT.
6.  **Response**: Controller sends `200 OK` with the token.

## 🔌 External Integrations

-   **Midtrans**: Handle payment transactions via Webhooks.
-   **Cloudinary**: Asset upload and management.
-   **Socket.io**: Real-time event broadcasting (Chats, Notifications).
