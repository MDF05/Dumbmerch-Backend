# 🧪 Testing Guide

This document describes the testing protocols for the Dumbmerch Backend.

## 🎯 Testing Strategy

Since the application uses Prisma and Express, our testing strategy focuses on correct API responses and database integrity.

### 1. Unit Testing
- **Goal**: Test individual utility functions and independent services.
- **Tools**: Jest or Vitest.
- **Mocking**: Use mocks for Prisma and external APIs (Midtrans).

### 2. Integration Testing
- **Goal**: Test API endpoints (`routes` + `controllers` + `db`).
- **Strategy**: Use a dedicated **Test Database** (e.g., `dumbmerch_test`). Spin up the database using Docker Compose, run migrations, run tests, and tear down.

## 🛠️ Test Setup

*Note: Automated tests are currently being implemented.*

### Recommended Stack
- **Runner**: Jest
- **HTTP Client**: Supertest
- **Mocking**: jest-mock-extended

### Sample Test Case (Login)

```typescript
import request from 'supertest';
import app from '../src/app';

describe('POST /auth/login', () => {
  it('should return 200 and a token for valid credentials', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password'
      });
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
```

## ✅ Manual Testing Checklist

Before PR submission:
- [ ] **Auth**: Login with Admin and User accounts works.
- [ ] **Validation**: Sending invalid JSON to endpoints returns 400 Bad Request.
- [ ] **Transactions**: Checkout flow successfully generates a generic Snap Token.
- [ ] **Sockets**: Chat messages are received in real-time.
