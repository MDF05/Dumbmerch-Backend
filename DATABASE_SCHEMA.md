# 🗄️ Database Schema

The database uses **PostgreSQL** and is managed by **Prisma ORM**.

## 🧩 E-R Diagram (Mermaid)

```mermaid
erDiagram
    User ||--|| Profile : has
    User ||--o{ Cart : has
    User ||--o{ Chats : sends_receives
    Profile ||--o{ Transaction : makes
    Profile ||--o{ Product : owns
    Category ||--o{ Product : classifies
    Product ||--o{ Cart : in
    Product ||--o{ Transaction : purchased
    Product ||--o{ ImageProduct : has_images

    User {
        int id PK
        string email
        string password
        enum role "ADMIN | USER"
    }

    Profile {
        int id PK
        string name
        string phone
        string address
    }

    Product {
        int id PK
        string name
        string price
        int categoryId FK
    }

    Transaction {
        int id PK
        string order_id
        string status
        decimal gross_amount
    }
```

## 📋 Models Design

### User
System users.
- `role`: Determines access level. `ADMIN` can manage products.

### Profile
Extended user information separate from authentication credentials.
- Contains PII like `phone`, `address`.

### Product
Items available for sale.
- Linked to `Category`.
- `quantity`: Tracks inventory (stored as String in schema, consider migrating to Int).

### Transaction
Records of purchases.
- `status_code`, `transaction_status`: Mapped from Midtrans response.
- `gross_amount`: Decimal precision for financial accuracy.

### Chats
Stores message history between users.
- `roomId`: Unique identifier for the conversation pair.
