# AdLex - Anti-Corruption Transparency Platform

## 🎯 Overview

AdLex is a comprehensive web application designed to combat corruption in Uzbekistan by providing transparency about government institutions, enterprises, and organizations. The platform enables citizens to report corruption while maintaining confidentiality and guaranteeing whistleblower protection.

## ✨ Key Features

### 1. Interactive Map System
- Live map of Uzbekistan displaying all institutions
- Search and filter by region, sector, and organization type
- Click-to-view organization details
- Geographic coordinates and contact information

### 2. Organization Directory
- Complete database of government institutions, enterprises, and NGOs
- Staff directory with names, positions, and photos
- Multi-language support (Uzbek, Russian, English)
- Real-time organization data updates

### 3. Corruption Complaint System
- **Non-Anonymous Reporting**: Requires full name, phone, and email
- **Evidence Attachment**: Support for documents, images, and videos
- **Against Individual or Organization**: File against specific employees or entire organization
- **Automatic Routing**: Complaints sent to Anti-Corruption Agency
- **Unique Tracking**: Reference numbers for complaint status tracking

### 4. Security & Confidentiality
- **AES-256 Encryption**: All sensitive data encrypted
- **Data Protection**: Confidentiality guaranteed despite non-anonymous reporting
- **JWT Authentication**: Secure token-based authentication
- **Audit Trail**: Complete logging of all actions
- **Encrypted Storage**: Files and personal data encrypted at rest

### 5. Real-time Statistics Dashboard
- Corruption statistics by region and sector
- Complaint confirmation rates and trends
- Regional performance tracking
- Interactive charts and visualizations

### 6. Admin Panel
- Complaint review and management
- Evidence verification system
- Statistics updates upon confirmation
- Role-based access control
- Complete audit trail

## 🏗️ Technology Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Encryption**: AES-256 (crypto-js)
- **File Storage**: Local or Cloud (S3 ready)

### Frontend
- **Library**: React 18
- **Language**: TypeScript
- **UI Framework**: Tailwind CSS + Material-UI
- **Map**: Leaflet + OpenStreetMap
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios

### DevOps
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **Database Migration**: Prisma
- **Environment**: Supports development, staging, production

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Docker and Docker Compose (optional)
- PostgreSQL 12+ (if not using Docker)

### Option 1: Using Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/Nurshod0930/AdLex.git
cd AdLex

# Copy environment files
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Start all services
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:3001/api
# PostgreSQL: localhost:5432
```

### Option 2: Manual Installation

```bash
# Backend setup
cd backend
npm install
npx prisma migrate dev --name init
npm run dev

# Frontend setup (in new terminal)
cd frontend
npm install
npm start
```

## 📁 Project Structure

```
AdLex/
├── backend/
│   ├── src/
│   │   ├── app.ts                 # Express application setup
│   │   ├── server.ts              # Server startup
│   │   ├── routes/                # API endpoints
│   │   │   ├── auth.routes.ts
│   │   │   ├── organization.routes.ts
│   │   │   ├── complaint.routes.ts
│   │   │   ├── statistics.routes.ts
│   │   │   └── admin.routes.ts
│   │   ├── controllers/           # Request handlers
│   │   ├── services/              # Business logic
│   │   ├── middleware/            # Custom middleware
│   │   ├── utils/                 # Helper functions
│   │   └── types/                 # TypeScript types
│   ├── prisma/
│   │   ├── schema.prisma          # Database schema
│   │   └── migrations/            # Database migrations
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/                 # React pages
│   │   ├── components/            # Reusable components
│   │   ├── services/              # API services
│   │   ├── store/                 # Redux store
│   │   └── App.tsx
│   └── package.json
├── docker-compose.yml
├── Dockerfile.backend
├── Dockerfile.frontend
└── README.md
```

## 🔐 Security Features

- ✅ **Encryption**: AES-256 for sensitive data
- ✅ **Authentication**: JWT with refresh tokens
- ✅ **Rate Limiting**: Prevent brute force attacks
- ✅ **Input Validation**: Sanitize all user inputs
- ✅ **CORS**: Strict origin verification
- ✅ **Helmet**: HTTP security headers
- ✅ **Audit Logging**: Track all actions
- ✅ **File Scanning**: Virus detection ready
- ✅ **HTTPS**: SSL/TLS support
- ✅ **Password Security**: Bcrypt hashing with salt

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh JWT token
- `POST /api/auth/logout` - User logout

### Organizations
- `GET /api/organizations` - List all organizations
- `GET /api/organizations/:id` - Get organization details
- `GET /api/organizations/:id/employees` - Get staff directory
- `GET /api/organizations/search` - Search organizations
- `GET /api/organizations/region/:region` - Get by region

### Complaints
- `POST /api/complaints` - Submit complaint
- `GET /api/complaints/:id` - Get complaint status
- `GET /api/complaints/track/:referenceNumber` - Track complaint
- `POST /api/complaints/:id/attach` - Upload evidence
- `GET /api/complaints/:id/history` - Get complaint history

### Statistics
- `GET /api/statistics/dashboard` - Statistics overview
- `GET /api/statistics/by-region` - Regional statistics
- `GET /api/statistics/by-sector` - Sector statistics
- `GET /api/statistics/trends` - Trend analysis

### Admin
- `GET /api/admin/complaints` - View all complaints
- `PATCH /api/admin/complaints/:id/status` - Update complaint status
- `GET /api/admin/statistics` - Admin statistics view
- `GET /api/admin/audit-logs` - View audit logs

## 🌐 Usage Scenarios

### For Citizens
1. Browse the map to find organizations
2. View staff information
3. File corruption complaint with evidence
4. Track complaint status with reference number
5. View real-time corruption statistics

### For Anti-Corruption Agency
1. Receive complaints in secure system
2. Verify evidence and complaints
3. Mark confirmed cases
4. Update statistics in real-time
5. Track trends by region and sector

## 📝 Configuration

### Environment Variables

Backend (.env):
```
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/adlex
JWT_SECRET=your-secret-key
JWT_EXPIRY=24h
ENCRYPTION_KEY=your-encryption-key
CORS_ORIGIN=http://localhost:3000
```

Frontend (.env):
```
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_MAP_TOKEN=your-mapbox-token
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

## 📞 Support

For support, please contact: support@adlex.uz

## 🙏 Acknowledgments

- OpenStreetMap for map data
- Leaflet for mapping library
- Prisma for database ORM
- Express.js community

---

**AdLex - Making Uzbekistan Transparent, One Report at a Time** 🇺🇿
