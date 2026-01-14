# 🗺️ Roadmap

This document outlines the planned development path for the Dumbmerch Backend.

## Phase 1: Core Foundation (Current)
- [x] Database Schema Design (Prisma)
- [x] User Authentication (JWT)
- [x] Product Management API (CRUD)
- [x] Basic Cart & Transaction Flow

## Phase 2: Advanced Features
- [ ] **Email Notifications**: Integrated via Nodemailer/SMTP (for registration, order confirmation).
- [ ] **Search**: Advanced full-text search for products.
- [ ] **Admin Dashboard API**: Aggregated stats for sales and users.
- [ ] **Redis Caching**: Implement Redis to cache frequent API responses (e.g., product listing).

## Phase 3: Scaling & DevOps
- [ ] **Dockerization**: Complete Dockerfile and Docker Compose setup.
- [ ] **CI/CD**: GitHub Actions for automated testing and deployment.
- [ ] **Monitoring**: Integration with Sentry or Prometheus.

## Phase 4: Microservices (Long-term)
- [ ] Evaluate splitting "Notifications" and "Chat" into separate microservices.
