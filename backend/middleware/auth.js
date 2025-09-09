const jwt = require('jsonwebtoken');
const User = require('../models/User');

// JWT Blacklist (production'da Redis kullanılmalı)
const tokenBlacklist = new Set();

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        error: 'Access denied. No token provided.',
        code: 'NO_TOKEN'
      });
    }

    // Token blacklist'te mi kontrol et
    if (tokenBlacklist.has(token)) {
      return res.status(401).json({ 
        error: 'Token revoked.',
        code: 'TOKEN_REVOKED'
      });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('Decoded token:', decoded);
    } catch (jwtError) {
      console.error('JWT verification error:', jwtError);
      if (jwtError.name === 'TokenExpiredError') {
        return res.status(401).json({ 
          error: 'Token expired. Please log in again.',
          code: 'TOKEN_EXPIRED'
        });
      }
      if (jwtError.name === 'JsonWebTokenError') {
        return res.status(401).json({ 
          error: 'Invalid token.',
          code: 'INVALID_TOKEN'
        });
      }
      throw jwtError;
    }

    // Hem userId hem de id alanlarını kontrol et
    const userId = decoded.userId || decoded.id;
    if (!userId) {
      return res.status(401).json({ 
        error: 'Invalid token structure.',
        code: 'INVALID_TOKEN_STRUCTURE'
      });
    }

    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password', 'refreshToken'] }
    });

    if (!user) {
      return res.status(401).json({ 
        error: 'Invalid token. User not found.',
        code: 'USER_NOT_FOUND'
      });
    }

    // Kullanıcı aktif mi kontrol et
    if (!user.isActive) {
      return res.status(401).json({ 
        error: 'User account is deactivated.',
        code: 'USER_DEACTIVATED'
      });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({ 
      error: 'Server error during authentication.',
      code: 'SERVER_ERROR'
    });
  }
};

const adminMiddleware = async (req, res, next) => {
  try {
    await authMiddleware(req, res, () => {
      if (req.user.role !== 'admin') {
        return res.status(403).json({ 
          error: 'Access denied. Admin role required.',
          code: 'INSUFFICIENT_PERMISSIONS'
        });
      }
      next();
    });
  } catch (error) {
    console.error('Admin middleware error:', error);
    res.status(500).json({ 
      error: 'Server error during admin verification.',
      code: 'SERVER_ERROR'
    });
  }
};

// Token blacklist'e ekleme fonksiyonu
const addToBlacklist = (token) => {
  if (token) {
    tokenBlacklist.add(token);
    // Memory leak'i önlemek için belirli bir süre sonra blacklist'ten çıkar
    setTimeout(() => {
      tokenBlacklist.delete(token);
    }, 24 * 60 * 60 * 1000); // 24 saat
  }
};

// Blacklist'i temizleme fonksiyonu
const clearBlacklist = () => {
  tokenBlacklist.clear();
};

module.exports = {
  authMiddleware,
  adminMiddleware,
  addToBlacklist,
  clearBlacklist
}; 