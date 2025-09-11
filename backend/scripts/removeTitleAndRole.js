const { sequelize } = require('../config/database');

async function removeTitleAndRole() {
  try {
    console.log('Veritabanına bağlanılıyor...');
    await sequelize.authenticate();
    console.log('Veritabanı bağlantısı başarılı.');

    // title ve roleId sütunlarını kaldır
    console.log('title sütunu kaldırılıyor...');
    await sequelize.query('ALTER TABLE doctors DROP COLUMN IF EXISTS title');
    
    console.log('roleId sütunu kaldırılıyor...');
    await sequelize.query('ALTER TABLE doctors DROP COLUMN IF EXISTS roleId');
    
    console.log('Foreign key constraint kaldırılıyor...');
    try {
      await sequelize.query('ALTER TABLE doctors DROP FOREIGN KEY IF EXISTS doctors_ibfk_1');
    } catch (error) {
      console.log('Foreign key constraint zaten mevcut değil veya farklı isimde:', error.message);
    }

    console.log('✅ title ve roleId sütunları başarıyla kaldırıldı.');
    console.log('✅ Artık sadece uzmanlık alanı (specialty) gösterilecek.');
    
  } catch (error) {
    console.error('❌ Hata oluştu:', error);
  } finally {
    await sequelize.close();
  }
}

// Script'i çalıştır
if (require.main === module) {
  removeTitleAndRole();
}

module.exports = removeTitleAndRole;
