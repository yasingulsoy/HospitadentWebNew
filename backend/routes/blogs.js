const express = require('express');
const Blog = require('../models/Blog');
const User = require('../models/User');
const router = express.Router();

// Tüm blog yazılarını getir
router.get('/', async (req, res) => {
  try {
    const { 
      status, 
      category, 
      author, 
      search, 
      limit = 10, 
      page = 1,
      featured 
    } = req.query;
    
    let query = {};
    
    if (status) {
      query.status = status;
    }
    
    if (category) {
      query.category = category;
    }
    
    if (author) {
      query.author = author;
    }
    
    if (featured === 'true') {
      query.isFeatured = true;
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } }
      ];
    }
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const blogs = await Blog.find(query)
      .populate('author', 'name email')
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    const total = await Blog.countDocuments(query);
    
    res.json({
      blogs,
      pagination: {
        current: parseInt(page),
        total: Math.ceil(total / parseInt(limit)),
        totalItems: total
      }
    });
    
  } catch (error) {
    console.error('Blogs fetch error:', error);
    res.status(500).json({ error: 'Blog yazıları getirilirken hata oluştu' });
  }
});

// Tek blog yazısı getir
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate('author', 'name email');
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog yazısı bulunamadı' });
    }
    
    // Görüntülenme sayısını artır
    blog.viewCount += 1;
    await blog.save();
    
    res.json({ blog });
    
  } catch (error) {
    console.error('Blog fetch error:', error);
    res.status(500).json({ error: 'Blog yazısı getirilirken hata oluştu' });
  }
});

// Slug ile blog yazısı getir
router.get('/slug/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
      .populate('author', 'name email');
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog yazısı bulunamadı' });
    }
    
    // Görüntülenme sayısını artır
    blog.viewCount += 1;
    await blog.save();
    
    res.json({ blog });
    
  } catch (error) {
    console.error('Blog fetch error:', error);
    res.status(500).json({ error: 'Blog yazısı getirilirken hata oluştu' });
  }
});

// Yeni blog yazısı oluştur
router.post('/', async (req, res) => {
  try {
    const blogData = req.body;
    
    // Yazar kontrolü
    const author = await User.findById(blogData.author);
    if (!author) {
      return res.status(400).json({ error: 'Geçersiz yazar' });
    }
    
    // Slug kontrolü
    const existingBlog = await Blog.findOne({ slug: blogData.slug });
    if (existingBlog) {
      return res.status(400).json({ error: 'Bu slug zaten kullanılıyor' });
    }
    
    const blog = new Blog(blogData);
    await blog.save();
    
    const populatedBlog = await Blog.findById(blog._id)
      .populate('author', 'name email');
    
    res.status(201).json({ 
      success: true, 
      message: 'Blog yazısı başarıyla oluşturuldu',
      blog: populatedBlog
    });
    
  } catch (error) {
    console.error('Blog create error:', error);
    res.status(500).json({ error: 'Blog yazısı oluşturulurken hata oluştu' });
  }
});

// Blog yazısı güncelle
router.put('/:id', async (req, res) => {
  try {
    const blogData = req.body;
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog yazısı bulunamadı' });
    }
    
    // Slug değişmişse kontrol et
    if (blogData.slug && blogData.slug !== blog.slug) {
      const existingBlog = await Blog.findOne({ slug: blogData.slug });
      if (existingBlog) {
        return res.status(400).json({ error: 'Bu slug zaten kullanılıyor' });
      }
    }
    
    Object.assign(blog, blogData);
    await blog.save();
    
    const updatedBlog = await Blog.findById(blog._id)
      .populate('author', 'name email');
    
    res.json({ 
      success: true, 
      message: 'Blog yazısı başarıyla güncellendi',
      blog: updatedBlog
    });
    
  } catch (error) {
    console.error('Blog update error:', error);
    res.status(500).json({ error: 'Blog yazısı güncellenirken hata oluştu' });
  }
});

// Blog yazısı sil
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog yazısı bulunamadı' });
    }
    
    await Blog.findByIdAndDelete(req.params.id);
    
    res.json({ 
      success: true, 
      message: 'Blog yazısı başarıyla silindi' 
    });
    
  } catch (error) {
    console.error('Blog delete error:', error);
    res.status(500).json({ error: 'Blog yazısı silinirken hata oluştu' });
  }
});

// Blog yazısını yayınla/yayından kaldır
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog yazısı bulunamadı' });
    }
    
    blog.status = status;
    if (status === 'published' && !blog.publishedAt) {
      blog.publishedAt = new Date();
    }
    
    await blog.save();
    
    const updatedBlog = await Blog.findById(blog._id)
      .populate('author', 'name email');
    
    res.json({ 
      success: true, 
      message: `Blog yazısı ${status === 'published' ? 'yayınlandı' : 'taslak olarak işaretlendi'}`,
      blog: updatedBlog
    });
    
  } catch (error) {
    console.error('Blog status update error:', error);
    res.status(500).json({ error: 'Blog yazısı durumu güncellenirken hata oluştu' });
  }
});

// Blog kategorilerini getir
router.get('/categories/list', async (req, res) => {
  try {
    const categories = await Blog.distinct('category');
    res.json({ categories });
  } catch (error) {
    console.error('Categories fetch error:', error);
    res.status(500).json({ error: 'Kategoriler getirilirken hata oluştu' });
  }
});

module.exports = router; 