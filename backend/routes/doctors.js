const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const Branch = require('../models/Branch');
const Role = require('../models/Role');
const Specialty = require('../models/Specialty');

// Tüm hekimleri getir
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.findAll({
      where: { isActive: true },
      include: [
        { model: Branch, as: 'branches', through: { attributes: [] }, where: { isActive: true }, required: false },
        { model: Role, as: 'role' },
        { model: Specialty, as: 'specialty' }
      ],
      order: [['order', 'ASC']]
    });
    
    res.json(doctors);
  } catch (error) {
    console.error('Hekimler getirilirken hata:', error);
    res.status(500).json({ error: 'Hekimler getirilemedi' });
  }
});

// Tek hekim getir (ID ile)
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findOne({
      where: { 
        id: id,
        isActive: true 
      },
      include: [
        { model: Branch, as: 'branches', through: { attributes: [] }, required: false },
        { model: Role, as: 'role' },
        { model: Specialty, as: 'specialty' }
      ]
    });
    
    if (!doctor) {
      return res.status(404).json({ error: 'Hekim bulunamadı' });
    }
    
    res.json(doctor);
  } catch (error) {
    console.error('Hekim getirilirken hata:', error);
    res.status(500).json({ error: 'Hekim getirilemedi' });
  }
});

// Şubeye göre hekimleri getir
router.get('/branch/:branchId', async (req, res) => {
  try {
    const { branchId } = req.params;
    const doctors = await Doctor.findAll({
      where: { isActive: true },
      include: [
        { 
          model: Branch, as: 'branches', required: true,
          through: { attributes: [] },
          where: { id: branchId, isActive: true }
        },
        { model: Role, as: 'role' },
        { model: Specialty, as: 'specialty' }
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
    const { branches } = doctorData;
    delete doctorData.branches;
    const doctor = await Doctor.create(doctorData);
    if (Array.isArray(branches) && branches.length > 0) {
      await doctor.setBranches(branches);
    }
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
    const { branches } = doctorData;
    delete doctorData.branches;
    
    const doctor = await Doctor.findByPk(id);
    if (!doctor) {
      return res.status(404).json({ error: 'Hekim bulunamadı' });
    }
    
    await doctor.update(doctorData);
    if (Array.isArray(branches)) {
      await doctor.setBranches(branches);
    }
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