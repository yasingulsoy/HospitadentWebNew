const { Sequelize } = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../config.env') });

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'hospitadent_db',
  username: process.env.DB_USER || 'hospitadent_user',
  password: process.env.DB_PASSWORD,
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  pool: {
    max: 10,
    min: 2,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: true,
    underscored: true
  },
  retry: {
    max: 3,
    timeout: 5000
  }
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connection successful');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    throw error;
  }
};

const syncDatabase = async () => {
  try {
    const options = process.env.NODE_ENV === 'development' 
      ? { alter: true, logging: console.log }
      : { alter: false, logging: false };
    
    await sequelize.sync(options);
    console.log('✅ Database tables synchronized');
    return true;
  } catch (error) {
    console.error('❌ Database sync failed:', error.message);
    throw error;
  }
};

// Graceful shutdown
const closeConnection = async () => {
  try {
    await sequelize.close();
    console.log('✅ Database connection closed gracefully');
  } catch (error) {
    console.error('❌ Error closing database connection:', error.message);
  }
};

module.exports = {
  sequelize,
  testConnection,
  syncDatabase,
  closeConnection
}; 