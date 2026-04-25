# Getting Started with AdLex

## Prerequisites

- Node.js 18+ and npm 8+
- Docker and Docker Compose (optional but recommended)
- PostgreSQL 12+ (if not using Docker)
- Git

## Installation

### Option 1: Quick Start with Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/Nurshod0930/AdLex.git
cd AdLex

# Copy environment files
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Start all services with Docker Compose
docker-compose up -d

# Wait for services to start (about 30 seconds)
# Verify services are running
docker-compose ps
```

**Access the application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api
- API Health Check: http://localhost:3001/health
- PostgreSQL: localhost:5432

### Option 2: Manual Installation

#### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create PostgreSQL database
createdb adlex

# Copy environment file
cp .env.example .env

# Update .env with your database credentials
# DATABASE_URL=postgresql://user:password@localhost:5432/adlex

# Run database migrations
npx prisma migrate dev --name init

# Seed database with sample data (optional)
npm run prisma:seed

# Start backend server
npm run dev
```

Backend will run on: http://localhost:3001

#### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm start
```

Frontend will open at: http://localhost:3000

## Configuration

### Backend Environment Variables (.env)

```env
# Server
NODE_ENV=development
PORT=3001

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/adlex

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRY=24h

# Encryption
ENCRYPTION_KEY=your-encryption-key-32-chars-min

# Email (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# CORS
CORS_ORIGIN=http://localhost:3000

# File Upload
MAX_FILE_SIZE=10485760
UPLOAD_DIR=./uploads

# Anti-Corruption Agency Email
AGENCY_EMAIL=agency@anti-corruption.uz
```

### Frontend Environment Variables (.env)

```env
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_APP_NAME=AdLex
REACT_APP_VERSION=1.0.0
```

## Database Setup

### Automatic (with Prisma)

```bash
cd backend
npm run prisma:migrate
```

### Manual PostgreSQL Setup

```sql
-- Create database
CREATE DATABASE adlex;

-- Connect to database
\c adlex

-- Create extensions
CREATE EXTENSION IF NOT EXISTS uuid-ossp;
```

## Running the Application

### Development Mode

```bash
# Backend
cd backend
npm run dev

# Frontend (in another terminal)
cd frontend
npm start
```

### Production Build

```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd frontend
npm run build
npm start
```

## Database Operations

### View Database in Prisma Studio

```bash
cd backend
npx prisma studio
```

Opens at: http://localhost:5555

### Create New Migration

```bash
cd backend
npx prisma migrate dev --name migration_name
```

### Reset Database (Development Only)

```bash
cd backend
npx prisma migrate reset
```

## API Testing

### Using cURL

```bash
# Health check
curl http://localhost:3001/health

# Register user
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "SecurePassword123",
    "phoneNumber": "+998901234567"
  }'

# Get organizations
curl http://localhost:3001/api/organizations

# Get single organization
curl http://localhost:3001/api/organizations/1
```

### Using Postman

1. Import the Postman collection from `docs/postman_collection.json`
2. Set environment variables:
   - `base_url`: http://localhost:3001
   - `auth_token`: (obtained from login response)
3. Run requests from the collection

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

### Database Connection Error

```bash
# Check PostgreSQL is running
# macOS
brew services list

# Linux
sudo service postgresql status

# Windows
sc query postgresql-x64-13
```

### Docker Issues

```bash
# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Remove and rebuild
docker-compose down -v
docker-compose up -d --build
```

### Node Module Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Development Tools

### Code Formatting

```bash
cd backend
npm run lint
npm run format

cd ../frontend
npm run lint
npm run format
```

### Run Tests

```bash
cd backend
npm test

cd ../frontend
npm test
```

### Build Docker Images

```bash
# Build all images
docker-compose build

# Build specific service
docker-compose build backend
docker-compose build frontend
```

## Deployment

### Deploy with Docker

```bash
# Build production images
docker-compose -f docker-compose.prod.yml build

# Start production containers
docker-compose -f docker-compose.prod.yml up -d
```

### Environment for Production

Update `.env` with production values:
- `NODE_ENV=production`
- `DATABASE_URL=` (production database)
- `JWT_SECRET=` (strong random key)
- `ENCRYPTION_KEY=` (strong random key)

## Help & Support

- 📚 **API Documentation**: See `API_DOCS.md`
- 🤝 **Contributing**: See `CONTRIBUTING.md`
- 🐛 **Report Issues**: GitHub Issues
- 💬 **Discussions**: GitHub Discussions

## Next Steps

1. ✅ Installation complete!
2. 📖 Read [API_DOCS.md](./API_DOCS.md) for API endpoints
3. 🗺️ Explore the interactive map on frontend
4. 📝 Test complaint submission workflow
5. 📊 View statistics dashboard
6. 🔧 Customize for your needs

Happy coding! 🚀
