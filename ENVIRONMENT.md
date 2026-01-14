# 🌍 Environment Variables

To run the Dumbmerch Backend, you must configure the following environment variables.

## Setup

1.  Create a `.env` file in the root directory.
2.  Populate it with the keys below.

## Required Variables

### App Config
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | The port the server runs on. | `5000` |
| `NODE_ENV` | Environment mode. | `development` or `production` |

### Database
| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string. | `postgresql://user:pass@localhost:5432/dumbmerch?schema=public` |

### Security
| Variable | Description | Example |
|----------|-------------|---------|
| `JWT_SECRET` | Secret key for signing JSON Web Tokens. | `supersecretkey123` |
| `JWT_EXPIRES_IN` | Token expiration time. | `1d` |

### Third-Party Services
| Variable | Description | Example |
|----------|-------------|---------|
| `MIDTRANS_SERVER_KEY` | Server key for Midtrans Payment API. | `SB-Mid-server-xxxx` |
| `MIDTRANS_CLIENT_KEY` | Client key for Midtrans. | `SB-Mid-client-xxxx` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name. | `dumbmerch` |
| `CLOUDINARY_API_KEY` | Cloudinary API key. | `123456789` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret. | `abcdefg` |

### Mail (Optional)
| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server host. | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port. | `587` |
| `SMTP_USER` | Email username. | `user@example.com` |
| `SMTP_PASS` | Email password. | `password` |

## Example `.env` File

```env
PORT=5000
NODE_ENV=development

DATABASE_URL="postgresql://postgres:root@localhost:5432/dumbmerch_db?schema=public"

JWT_SECRET="changethisinformproduction"
JWT_EXPIRES_IN="7d"

MIDTRANS_SERVER_KEY="SB-Mid-server-xxxxxxxx"
MIDTRANS_CLIENT_KEY="SB-Mid-client-xxxxxxxx"

CLOUDINARY_CLOUD_NAME="mycloud"
CLOUDINARY_API_KEY="000000000"
CLOUDINARY_API_SECRET="xxxxxxxxxxxx"
```
