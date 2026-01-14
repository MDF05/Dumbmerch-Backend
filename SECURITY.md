# 🛡️ Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please **do not** create a public issue. Instead, please email the maintainers directly at security@dumbmerch.com. We will address the issue promptly.

## Security Features

### 1. Authentication
- **JWT (JSON Web Tokens)**: We use signed JWTs for stateless authentication.
- **Password Hashing**: All passwords are hashed using **bcrypt** before storage. We never store plain-text passwords.

### 2. Authorization
- **RBAC**: Middleware enforces role limitations (Admin vs User) on critical endpoints.

### 3. Data Validation
- **Input Sanitization**: We use **Zod** schemas to validate all incoming requests, preventing injection attacks and ensuring data integrity.

### 4. Network Security
- **CORS**: Cross-Origin Resource Sharing is configured to allow only trusted origins.
- **Helmet**: (Recommended) Use Helmet.js middleware to set secure HTTP headers.

## Best Practices for Developers

- **Secrets**: Never commit `.env` files or hardcode API keys.
- **Updates**: Regularly update npm dependencies to patch known vulnerabilities (`npm audit`).
- **Logs**: Do not log sensitive information (PII, tokens, passwords) to the console or log files.
