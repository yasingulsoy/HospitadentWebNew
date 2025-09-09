const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { addToBlacklist } = require('../middleware/auth');
const router = express.Router();

// JWT Blacklist (production'da Redis kullanılmalı)
const tokenBlacklist = new Set();

// Giriş yapma
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

    // Kullanıcıyı bul
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ 
        error: 'Geçersiz email veya şifre',
        code: 'INVALID_CREDENTIALS'
      });
    }

    // Şifreyi kontrol et
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
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

    // Son giriş tarihini güncelle
    user.lastLogin = new Date();
    await user.save();

    // Access token oluştur (kısa süreli)
    const accessToken = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '15m' }
    );

    // Refresh token oluştur (uzun süreli)
    const refreshToken = jwt.sign(
      { 
        userId: user.id,
        type: 'refresh'
      },
      process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d' }
    );

    // Refresh token'ı kullanıcıya kaydet
    user.refreshToken = refreshToken;
    await user.save();

    res.json({
      success: true,
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      error: 'Giriş yapılırken hata oluştu',
      code: 'LOGIN_ERROR'
    });
  }
});

// Token yenileme
router.post('/refresh', async (req, res) => {
  try {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
      return res.status(401).json({ 
        error: 'Refresh token gerekli',
        code: 'MISSING_REFRESH_TOKEN'
      });
    }

    // Refresh token'ı doğrula
    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET);
    } catch (jwtError) {
      if (jwtError.name === 'TokenExpiredError') {
        return res.status(401).json({ 
          error: 'Refresh token süresi dolmuş',
          code: 'REFRESH_TOKEN_EXPIRED'
        });
      }
      return res.status(401).json({ 
        error: 'Geçersiz refresh token',
        code: 'INVALID_REFRESH_TOKEN'
      });
    }
    
    // Kullanıcıyı bul ve refresh token'ı kontrol et
    const user = await User.findByPk(decoded.userId);
    if (!user || user.refreshToken !== refreshToken) {
      return res.status(401).json({ 
        error: 'Geçersiz refresh token',
        code: 'INVALID_REFRESH_TOKEN'
      });
    }

    // Yeni access token oluştur
    const newAccessToken = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '15m' }
    );

    res.json({
      success: true,
      accessToken: newAccessToken
    });

  } catch (error) {
    console.error('Token refresh error:', error);
    res.status(500).json({ 
      error: 'Token yenilenemedi',
      code: 'REFRESH_ERROR'
    });
  }
});

// Güvenli çıkış yapma
router.post('/logout', async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (token) {
      // Token'ı blacklist'e ekle
      addToBlacklist(token);
      
      try {
        // Kullanıcının refresh token'ını temizle
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.userId);
        if (user) {
          user.refreshToken = null;
          await user.save();
        }
      } catch (error) {
        // Token geçersiz olsa bile logout işlemini tamamla
        console.log('Logout: Invalid token, but continuing logout process');
      }
    }

    res.json({ 
      success: true, 
      message: 'Başarıyla çıkış yapıldı' 
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ 
      error: 'Çıkış yapılırken hata oluştu',
      code: 'LOGOUT_ERROR'
    });
  }
});

// Kullanıcı bilgilerini getir
router.get('/me', async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ 
        error: 'Token gerekli',
        code: 'NO_TOKEN'
      });
    }

    // Token blacklist'te mi kontrol et
    if (tokenBlacklist.has(token)) {
      return res.status(401).json({ 
        error: 'Token geçersiz',
        code: 'TOKEN_REVOKED'
      });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (jwtError) {
      if (jwtError.name === 'TokenExpiredError') {
        return res.status(401).json({ 
          error: 'Token süresi dolmuş',
          code: 'TOKEN_EXPIRED'
        });
      }
      return res.status(401).json({ 
        error: 'Geçersiz token',
        code: 'INVALID_TOKEN'
      });
    }

    const user = await User.findByPk(decoded.userId, {
      attributes: { exclude: ['password', 'refreshToken'] }
    });
    
    if (!user) {
      return res.status(401).json({ 
        error: 'Kullanıcı bulunamadı',
        code: 'USER_NOT_FOUND'
      });
    }

    res.json({ user });

  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ 
      error: 'Kimlik doğrulama hatası',
      code: 'AUTH_ERROR'
    });
  }
});

module.exports = router; 