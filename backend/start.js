#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Hospitadent Backend...\n');

// Check if config.env exists
const configPath = path.join(__dirname, 'config.env');
if (!fs.existsSync(configPath)) {
  console.error('❌ config.env file not found!');
  console.log('📝 Please create a config.env file with the following variables:');
  console.log(`
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=hospitadent_db
DB_USER=your_username
DB_PASSWORD=your_password
DB_DIALECT=postgres
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@hospitadent.com
ADMIN_PASSWORD=secure_password
  `);
  process.exit(1);
}

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log('📦 Installing dependencies...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully!\n');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }
}

// Create logs directory if it doesn't exist
const logsPath = path.join(__dirname, 'logs');
if (!fs.existsSync(logsPath)) {
  fs.mkdirSync(logsPath, { recursive: true });
  console.log('📁 Created logs directory');
}

// Create uploads directory if it doesn't exist
const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
  console.log('📁 Created uploads directory');
}

console.log('✅ Environment check completed!\n');

// Start the server
require('./server.js'); 