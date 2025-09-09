# Hospitadent Backend API

This is the backend API for the Hospitadent dental clinic management system.

## Features

- User authentication and authorization
- Branch management
- Doctor management
- Blog management
- Admin panel
- PostgreSQL database integration
- JWT token authentication
- File upload support

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn

## Installation

1. Clone the repository and navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a PostgreSQL database and update the configuration in `config.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=hospitadent_db
DB_USER=your_username
DB_PASSWORD=your_password
DB_DIALECT=postgres
```

4. Set up environment variables in `config.env`:
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@hospitadent.com
ADMIN_PASSWORD=secure_password
```

## Running the Application

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/verify` - Verify JWT token

### Branches
- `GET /api/branches` - Get all branches
- `GET /api/branches/:id` - Get branch by ID
- `POST /api/branches` - Create new branch
- `PUT /api/branches/:id` - Update branch
- `DELETE /api/branches/:id` - Delete branch

### Doctors
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor by ID
- `POST /api/doctors` - Create new doctor
- `PUT /api/doctors/:id` - Update doctor
- `DELETE /api/doctors/:id` - Delete doctor

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get blog by ID
- `POST /api/blogs` - Create new blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/dashboard` - Get dashboard stats

### Health Check
- `GET /api/health` - API health status

## Database Models

### User
- id (Primary Key)
- email (Unique)
- password (Hashed)
- role (admin/user)
- createdAt, updatedAt

### Branch
- id (Primary Key)
- name
- address
- phone
- email
- workingHours
- createdAt, updatedAt

### Doctor
- id (Primary Key)
- name
- specialty
- experience
- education
- image
- branchId (Foreign Key)
- createdAt, updatedAt

### Blog
- id (Primary Key)
- title
- content
- excerpt
- image
- authorId (Foreign Key)
- seoTitle
- seoDescription
- seoKeywords
- createdAt, updatedAt

## Security

- JWT token authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation
- Error handling

## File Structure

```
backend/
├── config/
│   └── database.js
├── middleware/
│   ├── auth.js
│   └── validation.js
├── models/
│   ├── User.js
│   ├── Branch.js
│   ├── Doctor.js
│   └── Blog.js
├── routes/
│   ├── auth.js
│   ├── branches.js
│   ├── doctors.js
│   ├── blogs.js
│   └── admin.js
├── scripts/
│   └── createAdmin.js
├── server.js
├── package.json
├── config.env
└── README.md
```

## Scripts

### Create Admin User
```bash
node scripts/createAdmin.js
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development |
| DB_HOST | Database host | localhost |
| DB_PORT | Database port | 5432 |
| DB_NAME | Database name | hospitadent_db |
| DB_USER | Database user | hospitadent_user |
| DB_PASSWORD | Database password | - |
| DB_DIALECT | Database dialect | postgres |
| JWT_SECRET | JWT secret key | - |
| ADMIN_EMAIL | Admin email | admin@hospitadent.com |
| ADMIN_PASSWORD | Admin password | - |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License. 