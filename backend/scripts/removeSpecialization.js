const { sequelize } = require('../config/database');

async function removeSpecialization() {
  try {
    console.log('Veritabanına bağlanılıyor...');
    await sequelize.authenticate();
    console.log('Veritabanı bağlantısı başarılı.');

    // specialization sütununu kaldır
    console.log('specialization sütunu kaldırılıyor...');
    await sequelize.query('ALTER TABLE doctors DROP COLUMN IF EXISTS specialization');
    
    console.log('✅ specialization sütunu başarıyla kaldırıldı.');
    console.log('✅ Artık sadece specialty_id ile specialties tablosundan veri çekilecek.');
    
  } catch (error) {
    console.error('❌ Hata oluştu:', error);
  } finally {
    await sequelize.close();
  }
}

// Script'i çalıştır
if (require.main === module) {
  removeSpecialization();
}

module.exports = removeSpecialization;
