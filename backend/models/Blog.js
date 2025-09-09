const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('./User');

const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  excerpt: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  featuredImage: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  category: {
    type: DataTypes.ENUM('Diş Sağlığı', 'Tedavi', 'Teknoloji', 'Haberler', 'Genel'),
    defaultValue: 'Genel'
  },
  tags: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  status: {
    type: DataTypes.ENUM('draft', 'published', 'archived'),
    defaultValue: 'draft'
  },
  publishedAt: {
    type: DataTypes.DATE
  },
  metaTitle: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  metaDescription: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  viewCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  isFeatured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  seoKeywords: {
    type: DataTypes.JSON,
    defaultValue: []
  }
}, {
  tableName: 'blogs',
  timestamps: true,
  hooks: {
    beforeCreate: (blog) => {
      if (!blog.slug) {
        blog.slug = blog.title
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
      }
      
      if (!blog.excerpt && blog.content) {
        blog.excerpt = blog.content.substring(0, 160) + '...';
      }
      
      if (!blog.metaTitle) {
        blog.metaTitle = blog.title;
      }
      
      if (!blog.metaDescription) {
        blog.metaDescription = blog.excerpt;
      }
    },
    beforeUpdate: (blog) => {
      if (blog.changed('title') && !blog.changed('slug')) {
        blog.slug = blog.title
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
      }
      
      if (blog.changed('content') && !blog.excerpt) {
        blog.excerpt = blog.content.substring(0, 160) + '...';
      }
      
      if (blog.status === 'published' && !blog.publishedAt) {
        blog.publishedAt = new Date();
      }
    }
  }
});

// İlişkileri tanımla
Blog.belongsTo(User, { as: 'author', foreignKey: 'authorId' });
User.hasMany(Blog, { as: 'blogs', foreignKey: 'authorId' });

module.exports = Blog; 