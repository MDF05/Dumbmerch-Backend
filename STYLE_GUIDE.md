# 🎨 Backend Style Guide

## 📝 Code Conventions

### Naming
- **Files**: camelCase (e.g., `userController.ts`, `authService.ts`).
- **Classes**: PascalCase (e.g., `UserController`, `AuthService`).
- **Interfaces**: PascalCase, generally without `I` prefix (e.g., `User`, `ProductDTO`).
- **Variables**: camelCase.
- **Constants**: SCREAMING_SNAKE_CASE.

### Async/Await
- Always use `async/await` over raw Promises/callbacks.
- Always use `try/catch` blocks in Controllers to handle errors gracefully.

### Typing
- **Strict Mode**: TypeScript strict mode should be enabled.
- **No `any`**: Avoid `any` as much as possible. Define interfaces or types for all data structures.

## 📁 Project Structure Rules

1.  **Thin Controllers**: Controllers should only handle HTTP req/res, validation, and calling services. No complex logic.
2.  **Fat Services**: Business logic belongs in the Service layer.
3.  **DTOs**: Use Data Transfer Objects (DTOs) for passing data between layers, preferably validated with Zod.

## 🧹 Error Handling

We use a centralized Error Handling Middleware.

- Throw standard Javascript `Error` or custom `AppError` in services.
- The middleware captures these and formats the JSON response.

```typescript
// ✅ Good
throw new Error("User not found");

// ❌ Bad
res.status(404).json({ message: "User not found" }); // Don't send response from service
```

## 🔍 Linting & Formatting

- **ESLint**: configured with TypeScript support.
- **Prettier**: for consistent code formatting.
