# 👋 Contributing Guide

Thank you for your interest in contributing to the Dumbmerch Backend!

## 🛠️ How to Contribute

1.  **Fork the repository**.
2.  **Create a feature branch**:
    ```bash
    git checkout -b feature/new-api-endpoint
    ```
3.  **Make your changes**. Ensure you follow the [STYLE_GUIDE.md](./STYLE_GUIDE.md).
4.  **Test your changes**.
5.  **Commit your changes**. Use descriptive commit messages.
    ```bash
    git commit -m "feat: add endpoint for user avatar upload"
    ```
6.  **Push to your fork** and submit a **Pull Request**.

## 💻 Local Development

1.  Clone the repo.
2.  Install dependencies: `npm install`.
3.  Set up the database: `npx prisma migrate dev`.
4.  Run the dev server: `npm run dev`.

## ✅ PR Checklist

- [ ] Code follows the style guide.
- [ ] No TypeScript errors.
- [ ] Database schema changes include a migration file.
- [ ] New dependencies are added to `package.json`.
