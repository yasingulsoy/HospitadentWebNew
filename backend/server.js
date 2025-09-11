const express = require('express');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
require('dotenv').config({ path: './config.env' });

const { sequelize, testConnection, syncDatabase, closeConnection } = require('./config/database');
const { globalErrorHandler } = require('./utils/errorHandler');
const { logger, logRequest, logError } = require('./utils/logger');
const fs = require('fs');

// Import models for relationships
require('./models/User');
require('./models/Branch');
require('./models/Blog');
require('./models/Role');
require('./models/Specialty');
require('./models/DoctorBranch');
require('./models/Doctor');

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  logger.info('📁 Uploads directory created');
}

// Enhanced CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://hospitadent.com', 'https://www.hospitadent.com']
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Request logging middleware
app.use(logRequest);

// Body parsing middleware with increased limits
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Session middleware with better security
app.use(session({
  secret: process.env.SESSION_SECRET || process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax'
  },
  name: 'hospitadent_session'
}));

// Database initialization with retry logic
const initializeDatabase = async (retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      logger.info(`🔄 Database initialization attempt ${i + 1}/${retries}`);
      await testConnection();
      await syncDatabase();
      logger.info('✅ Database initialized successfully');
      return true;
    } catch (error) {
      logger.error(`❌ Database initialization attempt ${i + 1} failed:`, error.message);
      if (i === retries - 1) {
        logger.error('❌ All database initialization attempts failed');
        throw error;
      }
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1)));
    }
  }
};

// API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/branches', require('./routes/branches'));
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/blogs', require('./routes/blogs'));
app.use('/api/admin', require('./routes/admin'));

// Static file serving for uploads with CORS headers and MIME types
app.use('/uploads', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  // Set proper MIME types for images
  const ext = path.extname(req.path).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') {
    res.type('image/jpeg');
  } else if (ext === '.png') {
    res.type('image/png');
  } else if (ext === '.gif') {
    res.type('image/gif');
  } else if (ext === '.webp') {
    res.type('image/webp');
  }
  
  next();
}, express.static(path.join(__dirname, 'uploads')));

// Health check endpoint with detailed status
app.get('/api/health', async (req, res) => {
  try {
    const dbStatus = await sequelize.authenticate() ? 'connected' : 'disconnected';
    res.json({ 
      status: 'OK', 
      message: 'Hospitadent API is running',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      database: dbStatus,
      uptime: process.uptime(),
      memory: process.memoryUsage()
    });
  } catch (error) {
    res.status(503).json({
      status: 'ERROR',
      message: 'Service unavailable',
      database: 'disconnected',
      error: error.message
    });
  }
});

// Error logging middleware
app.use(logError);

// Global error handling middleware
app.use(globalErrorHandler);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Page not found',
    path: req.originalUrl,
    method: req.method
  });
});

// Start server with better error handling
const startServer = async () => {
  try {
    await initializeDatabase();
    
    const server = app.listen(PORT, () => {
      logger.info(`🚀 Hospitadent Backend Server running on port ${PORT}`);
      logger.info(`📊 Admin Panel: http://localhost:3000/admin`);
      logger.info(`🔗 API: http://localhost:${PORT}/api`);
      logger.info(`🌍 Environment: ${process.env.NODE_ENV}`);
      logger.info(`📊 Health Check: http://localhost:${PORT}/api/health`);
    });

    // Handle server errors
    server.on('error', (error) => {
      logger.error('❌ Server error:', error);
      process.exit(1);
    });

  } catch (error) {
    logger.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

// Enhanced graceful shutdown
const gracefulShutdown = async (signal) => {
  logger.info(`${signal} signal received, shutting down server gracefully...`);
  
  try {
    await closeConnection();
    logger.info('✅ Database connection closed');
    process.exit(0);
  } catch (error) {
    logger.error('❌ Error during graceful shutdown:', error);
    process.exit(1);
  }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
}); 