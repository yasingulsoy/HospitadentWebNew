const { sequelize } = require('../config/database');
const User = require('../models/User');
const Doctor = require('../models/Doctor');
const Branch = require('../models/Branch');
const Blog = require('../models/Blog');

async function setupDatabase() {
  try {
    console.log('🔄 Database bağlantısı kuruluyor...');
    
    // Database'e bağlan
    await sequelize.authenticate();
    console.log('✅ Database bağlantısı başarılı');

    // Tabloları senkronize et (force: true ile mevcut tabloları yeniden oluştur)
    console.log('🔄 Tablolar senkronize ediliyor...');
    await sequelize.sync({ force: true });
    console.log('✅ Tablolar senkronize edildi');

    // Admin kullanıcısı oluştur
    console.log('🔄 Admin kullanıcısı oluşturuluyor...');
    const adminUser = await User.create({
      email: process.env.ADMIN_EMAIL || 'admin@hospitadent.com',
      password: process.env.ADMIN_PASSWORD || 'admin123',
      name: 'Admin User',
      role: 'admin',
      isActive: true
    });
    console.log('✅ Admin kullanıcısı oluşturuldu:', adminUser.email);

    // Örnek şubeler oluştur
    console.log('🔄 Örnek şubeler oluşturuluyor...');
    const branches = await Branch.bulkCreate([
      {
        name: 'Kadıköy Şubesi',
        slug: 'kadikoy-subesi',
        address: 'Kadıköy, İstanbul',
        phone: '+90 216 123 45 67',
        email: 'kadikoy@hospitadent.com',
        image: 'kadikoy.png',
        isActive: true
      },
      {
        name: 'Beşiktaş Şubesi',
        slug: 'besiktas-subesi',
        address: 'Beşiktaş, İstanbul',
        phone: '+90 212 123 45 67',
        email: 'besiktas@hospitadent.com',
        image: 'besiktas.png',
        isActive: true
      }
    ]);
    console.log('✅ Örnek şubeler oluşturuldu:', branches.length);

    // Örnek doktorlar oluştur
    console.log('🔄 Örnek doktorlar oluşturuluyor...');
    const doctors = await Doctor.bulkCreate([
      {
        name: 'Dr. Ahmet Selvi',
        title: 'Diş Hekimi',
        specialization: 'Ortodonti',
        experience: '15 yıl',
        education: 'İstanbul Üniversitesi',
        image: '1-dis-hekimi-ahmet-selvi.png',
        isActive: true,
        branchId: branches[0].id
      },
      {
        name: 'Dr. Recep Eskar',
        title: 'Diş Hekimi',
        specialization: 'Diş Hekimliği',
        experience: '12 yıl',
        education: 'Ankara Üniversitesi',
        image: '2-recep-eskar.png',
        isActive: true,
        branchId: branches[1].id
      }
    ]);
    console.log('✅ Örnek doktorlar oluşturuldu:', doctors.length);

    // Örnek blog yazıları oluştur
    console.log('🔄 Örnek blog yazıları oluşturuluyor...');
    const blogs = await Blog.bulkCreate([
      {
        title: 'Diş Sağlığı İçin Önemli İpuçları',
        content: 'Günlük diş bakımı rutininizde dikkat etmeniz gereken noktalar...',
        excerpt: 'Sağlıklı dişler için günlük bakım rutininizi öğrenin.',
        featuredImage: 'blog-1.jpg',
        status: 'published',
        authorId: adminUser.id,
        slug: 'dis-sagligi-icin-onemli-ipuclari'
      },
      {
        title: 'Ortodonti Tedavisi Hakkında',
        content: 'Ortodonti tedavisi süreci ve dikkat edilmesi gerekenler...',
        excerpt: 'Ortodonti tedavisi hakkında detaylı bilgi.',
        featuredImage: 'blog-2.jpg',
        status: 'published',
        authorId: adminUser.id,
        slug: 'ortodonti-tedavisi-hakkinda'
      }
    ]);
    console.log('✅ Örnek blog yazıları oluşturuldu:', blogs.length);

    console.log('🎉 Database kurulumu tamamlandı!');
    console.log('📊 Oluşturulan kayıtlar:');
    console.log(`   👤 Kullanıcılar: 1`);
    console.log(`   🏢 Şubeler: ${branches.length}`);
    console.log(`   👨‍⚕️ Doktorlar: ${doctors.length}`);
    console.log(`   📝 Blog Yazıları: ${blogs.length}`);

  } catch (error) {
    console.error('❌ Database kurulum hatası:', error);
    process.exit(1);
  } finally {
    await sequelize.close();
    console.log('🔌 Database bağlantısı kapatıldı');
  }
}

// Script doğrudan çalıştırılırsa
if (require.main === module) {
  setupDatabase();
}

module.exports = setupDatabase;
