const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Branch = require('./Branch');
const Role = require('./Role');
const Specialty = require('./Specialty');
const DoctorBranch = require('./DoctorBranch');

const Doctor = sequelize.define('Doctor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  imageWebp: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  },
  imageMime: {
    type: DataTypes.STRING,
    defaultValue: 'image/webp'
  },
  bio: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  summary: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  education: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  experience: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  languages: {
    type: DataTypes.JSON,
    defaultValue: []
  },
  phone: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: { model: 'roles', key: 'id' }
  },
  specialtyId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: { model: 'specialties', key: 'id' }
  },
  slug: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true
  }
}, {
  tableName: 'doctors',
  timestamps: true,
  hooks: {
    beforeCreate: (doctor) => {
      if (!doctor.slug && doctor.name) {
        doctor.slug = doctor.name
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
    },
    beforeUpdate: (doctor) => {
      if (doctor.changed('name') && !doctor.changed('slug') && doctor.name) {
        doctor.slug = doctor.name
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
    }
  }
});

// İlişkiler
Doctor.belongsToMany(Branch, { through: DoctorBranch, foreignKey: 'doctorId', otherKey: 'branchId', as: 'branches' });
Branch.belongsToMany(Doctor, { through: DoctorBranch, foreignKey: 'branchId', otherKey: 'doctorId', as: 'doctorsMany' });
Doctor.belongsTo(Role, { foreignKey: 'roleId', as: 'role' });
Doctor.belongsTo(Specialty, { foreignKey: 'specialtyId', as: 'specialty' });

module.exports = Doctor; 