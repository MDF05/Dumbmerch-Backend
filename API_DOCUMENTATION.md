# 📡 API Documentation

Base URL: `http://localhost:5000/api/v1`

## 🔐 Authentication

### Register
- **Endpoint**: `POST /auth/register`
- **Body**:
  ```json
  { "email": "user@example.com", "password": "password123", "name": "John Doe" }
  ```
- **Response**: `200 OK` with User object.

### Login
- **Endpoint**: `POST /auth/login`
- **Body**:
  ```json
  { "email": "user@example.com", "password": "password123" }
  ```
- **Response**: `200 OK`
  ```json
  { "token": "eyJh... (JWT Token)", "user": { ... } }
  ```

## 🛍️ Products

### Get All Products
- **Endpoint**: `GET /products`
- **Query Params**: `?search=shirt&category=1`
- **Response**: `200 OK` (Array of Products)

### Get Product Detail
- **Endpoint**: `GET /products/:id`

### Create Product (Admin)
- **Endpoint**: `POST /products`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  ```json
  { "name": "T-Shirt", "price": "100000", "description": "Cotton shirt", "images": [...] }
  ```

## 🛒 Cart

### Get Cart
- **Endpoint**: `GET /cart`
- **Headers**: `Authorization: Bearer <token>`

### Add to Cart
- **Endpoint**: `POST /cart`
- **Body**: `{ "productId": 1, "quantity": 1 }`

## 💳 Transactions

### Checkout
- **Endpoint**: `POST /transaction`
- **Body**: Cart checkout details.
- **Response**: Midtrans Snap Token.

### Webhook
- **Endpoint**: `POST /transaction/notification`
- **Description**: Endpoint for Midtrans server-to-server notifications.

## 💬 Chat

### Get Chats
- **Endpoint**: `GET /chats/:receiverId`
- **Headers**: `Authorization: Bearer <token>`

---
*Note: This is a simplified overview. For full schema details, please refer to the Swagger UI (if configured) at `/api-docs`.*
