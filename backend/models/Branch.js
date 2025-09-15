const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Branch = sequelize.define('Branch', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  address: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  mapUrl: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  phone: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'branches',
  timestamps: true,
  underscored: true,
  hooks: {
    beforeCreate: (branch) => {
      if (!branch.slug && branch.name) {
        branch.slug = branch.name
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
    beforeUpdate: (branch) => {
      if (branch.changed('name') && !branch.changed('slug') && branch.name) {
        branch.slug = branch.name
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

module.exports = Branch; 