#!/usr/bin/env node

const { testConnection, syncDatabase, closeConnection } = require('./config/database');

async function testDatabaseConnection() {
  console.log('🔍 Testing database connection...\n');
  
  try {
    // Test connection
    await testConnection();
    console.log('✅ Database connection successful!\n');
    
    // Test sync
    await syncDatabase();
    console.log('✅ Database sync successful!\n');
    
    console.log('🎉 All database tests passed!');
    
  } catch (error) {
    console.error('❌ Database test failed:', error.message);
    console.error('\n📋 Troubleshooting tips:');
    console.error('1. Check if PostgreSQL is running');
    console.error('2. Verify database credentials in config.env');
    console.error('3. Ensure database "hospitadent_db" exists');
    console.error('4. Check if user has proper permissions');
    
    process.exit(1);
  } finally {
    await closeConnection();
    console.log('🔌 Database connection closed');
  }
}

// Run the test
testDatabaseConnection();
