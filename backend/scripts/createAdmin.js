const { sequelize, testConnection, syncDatabase } = require('../config/database');
const User = require('../models/User');
require('dotenv').config({ path: './config.env' });

async function createAdminUser() {
  try {
    // Database bağlantısı ve senkronizasyon
    await testConnection();
    await syncDatabase();
    
    console.log('✅ PostgreSQL bağlantısı başarılı');
    
    // Admin kullanıcısı var mı kontrol et
    const existingAdmin = await User.findOne({ 
      where: { email: process.env.ADMIN_EMAIL } 
    });
    
    if (existingAdmin) {
      console.log('⚠️  Admin kullanıcısı zaten mevcut');
      console.log(`Email: ${existingAdmin.email}`);
      console.log(`Rol: ${existingAdmin.role}`);
      process.exit(0);
    }
    
    // Yeni admin kullanıcısı oluştur
    const adminUser = await User.create({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      name: 'Hospitadent Admin',
      role: 'admin',
      isActive: true
    });
    
    console.log('✅ Admin kullanıcısı başarıyla oluşturuldu');
    console.log(`Email: ${adminUser.email}`);
    console.log(`Şifre: ${process.env.ADMIN_PASSWORD}`);
    console.log(`Rol: ${adminUser.role}`);
    console.log('\n🔗 Admin paneline giriş: http://localhost:5000/admin');
    
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Hata:', error.message);
    process.exit(1);
  }
}

createAdminUser(); 