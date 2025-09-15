const express = require('express');
const router = express.Router();
const Branch = require('../models/Branch');
const Doctor = require('../models/Doctor');

// Tüm şubeleri getir
router.get('/', async (req, res) => {
  try {
    const branches = await Branch.findAll({
      where: { isActive: true },
      order: [['order', 'ASC']],
      include: [
        {
          model: Doctor,
          as: 'doctorsMany', // Doctor.js içinde tanımlanan alias
          where: { isActive: true },
          required: false
        }
      ]
    });
    
    res.json(branches);
  } catch (error) {
    console.error('Şubeler getirilirken hata:', error);
    res.status(500).json({ error: 'Şubeler getirilemedi' });
  }
});

// Slug ile şube getir
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const branch = await Branch.findOne({
      where: { 
        slug: slug,
        isActive: true 
      },
      include: [
        {
          model: Doctor,
          as: 'doctorsMany',
          where: { isActive: true },
          required: false
        }
      ]
    });
    
    if (!branch) {
      return res.status(404).json({ error: 'Şube bulunamadı' });
    }
    
    res.json(branch);
  } catch (error) {
    console.error('Şube getirilirken hata:', error);
    res.status(500).json({ error: 'Şube getirilemedi' });
  }
});

// Şube oluştur
router.post('/', async (req, res) => {
  try {
    const branchData = req.body;
    const branch = await Branch.create(branchData);
    res.status(201).json(branch);
  } catch (error) {
    console.error('Şube oluşturulurken hata:', error);
    res.status(400).json({ error: 'Şube oluşturulamadı' });
  }
});

// Şube güncelle
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const branchData = req.body;
    
    const branch = await Branch.findByPk(id);
    if (!branch) {
      return res.status(404).json({ error: 'Şube bulunamadı' });
    }
    
    await branch.update(branchData);
    res.json(branch);
  } catch (error) {
    console.error('Şube güncellenirken hata:', error);
    res.status(400).json({ error: 'Şube güncellenemedi' });
  }
});

// Şube sil
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const branch = await Branch.findByPk(id);
    if (!branch) {
      return res.status(404).json({ error: 'Şube bulunamadı' });
    }
    
    await branch.destroy();
    res.json({ message: 'Şube başarıyla silindi' });
  } catch (error) {
    console.error('Şube silinirken hata:', error);
    res.status(500).json({ error: 'Şube silinemedi' });
  }
});

module.exports = router; 