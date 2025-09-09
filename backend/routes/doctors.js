const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Branch = require('../models/Branch');

// Tüm hekimleri getir
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.findAll({
      where: { isActive: true },
      include: [
        {
          model: Branch,
          as: 'branch',
          where: { isActive: true },
          required: true
        }
      ],
      order: [['order', 'ASC']]
    });
    
    res.json(doctors);
  } catch (error) {
    console.error('Hekimler getirilirken hata:', error);
    res.status(500).json({ error: 'Hekimler getirilemedi' });
  }
});

// Şubeye göre hekimleri getir
router.get('/branch/:branchId', async (req, res) => {
  try {
    const { branchId } = req.params;
    const doctors = await Doctor.findAll({
      where: { 
        branchId: branchId,
        isActive: true 
      },
      include: [
        {
          model: Branch,
          as: 'branch',
          where: { isActive: true },
          required: true
        }
      ],
      order: [['order', 'ASC']]
    });
    
    res.json(doctors);
  } catch (error) {
    console.error('Şube hekimleri getirilirken hata:', error);
    res.status(500).json({ error: 'Şube hekimleri getirilemedi' });
  }
});

// Hekim oluştur
router.post('/', async (req, res) => {
  try {
    const doctorData = req.body;
    const doctor = await Doctor.create(doctorData);
    res.status(201).json(doctor);
  } catch (error) {
    console.error('Hekim oluşturulurken hata:', error);
    res.status(400).json({ error: 'Hekim oluşturulamadı' });
  }
});

// Hekim güncelle
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const doctorData = req.body;
    
    const doctor = await Doctor.findByPk(id);
    if (!doctor) {
      return res.status(404).json({ error: 'Hekim bulunamadı' });
    }
    
    await doctor.update(doctorData);
    res.json(doctor);
  } catch (error) {
    console.error('Hekim güncellenirken hata:', error);
    res.status(400).json({ error: 'Hekim güncellenemedi' });
  }
});

// Hekim sil
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const doctor = await Doctor.findByPk(id);
    if (!doctor) {
      return res.status(404).json({ error: 'Hekim bulunamadı' });
    }
    
    await doctor.destroy();
    res.json({ message: 'Hekim başarıyla silindi' });
  } catch (error) {
    console.error('Hekim silinirken hata:', error);
    res.status(500).json({ error: 'Hekim silinemedi' });
  }
});

module.exports = router; 