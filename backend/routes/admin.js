const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Doctor = require('../models/Doctor');
const Blog = require('../models/Blog');
const Branch = require('../models/Branch');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Multer konfigürasyonu - dosya yükleme için
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Sadece resim dosyaları yüklenebilir!'));
    }
  }
});

// Auth middleware import
const { adminMiddleware } = require('../middleware/auth');

// Admin girişi
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Input validation
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email ve şifre gerekli',
        code: 'MISSING_CREDENTIALS'
      });
    }
    
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ 
        error: 'Geçersiz email veya şifre',
        code: 'INVALID_CREDENTIALS'
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ 
        error: 'Geçersiz email veya şifre',
        code: 'INVALID_CREDENTIALS'
      });
    }

    // Kullanıcı aktif mi kontrol et
    if (!user.isActive) {
      return res.status(401).json({ 
        error: 'Hesabınız devre dışı bırakılmış',
        code: 'ACCOUNT_DEACTIVATED'
      });
    }

    // JWT token oluştur - userId alanını ekle
    const token = jwt.sign(
      { 
        userId: user.id,  // userId alanını ekle
        id: user.id,      // Geriye uyumluluk için
        email: user.email, 
        role: user.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
    );

    console.log('Generated token for user:', user.email, 'with payload:', { userId: user.id, email: user.email, role: user.role });

    res.json({ 
      accessToken: token, 
      refreshToken: token, // Şimdilik aynı token'ı kullanıyoruz
      user: { id: user.id, email: user.email, role: user.role } 
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ 
      error: 'Sunucu hatası',
      code: 'SERVER_ERROR'
    });
  }
});

// ==================== DOKTOR İŞLEMLERİ ====================

// Doktor ekleme için aktif şubeleri getir
router.get('/branches/active', adminMiddleware, async (req, res) => {
  try {
    const branches = await Branch.findAll({
      where: { isActive: true },
      order: [['name', 'ASC']],
      attributes: ['id', 'name', 'slug']
    });
    res.json(branches);
  } catch (error) {
    console.error('Active branches fetch error:', error);
    res.status(500).json({ 
      error: 'Aktif şubeler getirilemedi',
      code: 'FETCH_ERROR'
    });
  }
});

// Tüm doktorları getir
router.get('/doctors', adminMiddleware, async (req, res) => {
  try {
    const doctors = await Doctor.findAll({
      include: [{ model: Branch, as: 'branch' }],
      order: [['order', 'ASC']]
    });
    res.json(doctors);
  } catch (error) {
    console.error('Doctors fetch error:', error);
    res.status(500).json({ 
      error: 'Doktorlar getirilemedi',
      code: 'FETCH_ERROR'
    });
  }
});

// Doktor ekle
router.post('/doctors', adminMiddleware, upload.single('image'), async (req, res) => {
  try {
    const doctorData = {
      name: req.body.name,
      title: req.body.title,
      specialization: req.body.specialization,
      bio: req.body.bio,
      education: JSON.parse(req.body.education || '[]'),
      experience: JSON.parse(req.body.experience || '[]'),
      languages: JSON.parse(req.body.languages || '[]'),
      branchId: parseInt(req.body.branchId),
      order: parseInt(req.body.order) || 0,
      isActive: req.body.isActive === 'true'
    };

    if (req.file) {
      doctorData.image = `/uploads/${req.file.filename}`;
    }

    const doctor = await Doctor.create(doctorData);
    res.status(201).json(doctor);
  } catch (error) {
    console.error('Doctor creation error:', error);
    res.status(500).json({ 
      error: 'Doktor eklenemedi',
      code: 'CREATION_ERROR',
      details: error.message
    });
  }
});

// Doktor güncelle
router.put('/doctors/:id', adminMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const doctorData = {
      name: req.body.name,
      title: req.body.title,
      specialization: req.body.specialization,
      bio: req.body.bio,
      education: JSON.parse(req.body.education || '[]'),
      experience: JSON.parse(req.body.experience || '[]'),
      languages: JSON.parse(req.body.languages || '[]'),
      branchId: parseInt(req.body.branchId),
      order: parseInt(req.body.order) || 0,
      isActive: req.body.isActive === 'true'
    };

    if (req.file) {
      doctorData.image = `/uploads/${req.file.filename}`;
    }

    const doctor = await Doctor.findByPk(id);
    if (!doctor) {
      return res.status(404).json({ 
        error: 'Doktor bulunamadı',
        code: 'NOT_FOUND'
      });
    }

    await doctor.update(doctorData);
    res.json(doctor);
  } catch (error) {
    console.error('Doctor update error:', error);
    res.status(500).json({ 
      error: 'Doktor güncellenemedi',
      code: 'UPDATE_ERROR',
      details: error.message
    });
  }
});

// Doktor sil
router.delete('/doctors/:id', adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findByPk(id);
    
    if (!doctor) {
      return res.status(404).json({ 
        error: 'Doktor bulunamadı',
        code: 'NOT_FOUND'
      });
    }

    await doctor.destroy();
    res.json({ message: 'Doktor başarıyla silindi' });
  } catch (error) {
    console.error('Doctor deletion error:', error);
    res.status(500).json({ 
      error: 'Doktor silinemedi',
      code: 'DELETION_ERROR',
      details: error.message
    });
  }
});

// ==================== BLOG İŞLEMLERİ ====================

// Tüm blogları getir
router.get('/blogs', adminMiddleware, async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json(blogs);
  } catch (error) {
    console.error('Blogs fetch error:', error);
    res.status(500).json({ 
      error: 'Bloglar getirilemedi',
      code: 'FETCH_ERROR'
    });
  }
});

// Blog ekle
router.post('/blogs', adminMiddleware, upload.single('image'), async (req, res) => {
  try {
    const blogData = {
      title: req.body.title,
      content: req.body.content,
      excerpt: req.body.excerpt,
      author: req.body.author,
      tags: JSON.parse(req.body.tags || '[]'),
      isPublished: req.body.isPublished === 'true'
    };

    if (req.file) {
      blogData.image = `/uploads/${req.file.filename}`;
    }

    const blog = await Blog.create(blogData);
    res.status(201).json(blog);
  } catch (error) {
    console.error('Blog creation error:', error);
    res.status(500).json({ 
      error: 'Blog eklenemedi',
      code: 'CREATION_ERROR',
      details: error.message
    });
  }
});

// Blog güncelle
router.put('/blogs/:id', adminMiddleware, upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const blogData = {
      title: req.body.title,
      content: req.body.content,
      excerpt: req.body.excerpt,
      author: req.body.author,
      tags: JSON.parse(req.body.tags || '[]'),
      isPublished: req.body.isPublished === 'true'
    };

    if (req.file) {
      blogData.image = `/uploads/${req.file.filename}`;
    }

    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ 
        error: 'Blog bulunamadı',
        code: 'NOT_FOUND'
      });
    }

    await blog.update(blogData);
    res.json(blog);
  } catch (error) {
    console.error('Blog update error:', error);
    res.status(500).json({ 
      error: 'Blog güncellenemedi',
      code: 'UPDATE_ERROR',
      details: error.message
    });
  }
});

// Blog sil
router.delete('/blogs/:id', adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);
    
    if (!blog) {
      return res.status(404).json({ 
        error: 'Blog bulunamadı',
        code: 'NOT_FOUND'
      });
    }

    await blog.destroy();
    res.json({ message: 'Blog başarıyla silindi' });
  } catch (error) {
    console.error('Blog deletion error:', error);
    res.status(500).json({ 
      error: 'Blog silinemedi',
      code: 'DELETION_ERROR',
      details: error.message
    });
  }
});

// ==================== ŞUBE İŞLEMLERİ ====================

// Tüm şubeleri getir
router.get('/branches', adminMiddleware, async (req, res) => {
  try {
    const branches = await Branch.findAll({
      order: [['name', 'ASC']]
    });
    res.json(branches);
  } catch (error) {
    console.error('Branches fetch error:', error);
    res.status(500).json({ 
      error: 'Şubeler getirilemedi',
      code: 'FETCH_ERROR'
    });
  }
});

// Şube ekle
router.post('/branches', adminMiddleware, upload.none(), async (req, res) => {
  try {
    // Debug: Request body'yi kontrol et
    console.log('🔍 Request Body:', req.body);
    console.log('🔍 Request Headers:', req.headers);
    
    // Input validation
    if (!req.body.name || typeof req.body.name !== 'string' || req.body.name.trim() === '') {
      console.log('❌ Validation failed - name:', req.body.name);
      return res.status(400).json({ 
        error: 'Şube adı gerekli ve geçerli olmalı',
        code: 'MISSING_NAME'
      });
    }

    // Slug oluştur
    const createSlug = (name) => {
      if (!name || typeof name !== 'string') {
        return 'default-slug';
      }
      
      return name
        .toLowerCase()
        .replace(/ç/g, 'c')
        .replace(/ğ/g, 'g')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ş/g, 's')
        .replace(/ü/g, 'u')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
    };

    const branchData = {
      name: req.body.name.trim(),
      slug: createSlug(req.body.name),
      isActive: req.body.isActive === 'true' || req.body.isActive === true
    };

    console.log('✅ Creating branch with data:', branchData);

    const branch = await Branch.create(branchData);
    console.log('✅ Branch created successfully:', branch.toJSON());
    
    res.status(201).json(branch);
  } catch (error) {
    console.error('❌ Şube ekleme hatası:', error);
    res.status(500).json({ 
      error: 'Şube eklenemedi',
      code: 'CREATION_ERROR',
      details: error.message
    });
  }
});

// Şube güncelle
router.put('/branches/:id', adminMiddleware, upload.none(), async (req, res) => {
  try {
    const { id } = req.params;
    
    // Debug: Request body'yi kontrol et
    console.log('🔍 Update Request Body:', req.body);
    
    // Input validation
    if (!req.body.name || typeof req.body.name !== 'string' || req.body.name.trim() === '') {
      console.log('❌ Update validation failed - name:', req.body.name);
      return res.status(400).json({ 
        error: 'Şube adı gerekli ve geçerli olmalı',
        code: 'MISSING_NAME'
      });
    }
    
    // Slug oluştur
    const createSlug = (name) => {
      if (!name || typeof name !== 'string') {
        return 'default-slug';
      }
      
      return name
        .toLowerCase()
        .replace(/ç/g, 'c')
        .replace(/ğ/g, 'g')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ş/g, 's')
        .replace(/ü/g, 'u')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');
    };

    const branchData = {
      name: req.body.name.trim(),
      slug: createSlug(req.body.name),
      isActive: req.body.isActive === 'true' || req.body.isActive === true
    };

    console.log('✅ Updating branch with data:', branchData);

    const branch = await Branch.findByPk(id);
    if (!branch) {
      return res.status(404).json({ 
        error: 'Şube bulunamadı',
        code: 'NOT_FOUND'
      });
    }

    await branch.update(branchData);
    console.log('✅ Branch updated successfully:', branch.toJSON());
    
    res.json(branch);
  } catch (error) {
    console.error('❌ Şube güncelleme hatası:', error);
    res.status(500).json({ 
      error: 'Şube güncellenemedi',
      code: 'UPDATE_ERROR',
      details: error.message
    });
  }
});

// Şube sil
router.delete('/branches/:id', adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const branch = await Branch.findByPk(id);
    
    if (!branch) {
      return res.status(404).json({ 
        error: 'Şube bulunamadı',
        code: 'NOT_FOUND'
      });
    }

    await branch.destroy();
    res.json({ message: 'Şube başarıyla silindi' });
  } catch (error) {
    console.error('Şube silme hatası:', error);
    res.status(500).json({ 
      error: 'Şube silinemedi',
      code: 'DELETION_ERROR',
      details: error.message
    });
  }
});

// Uploads klasörü için statik dosya servisi
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

module.exports = router; 