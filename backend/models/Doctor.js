const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Branch = require('./Branch');

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
  bio: {
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
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  branchId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'branches',
      key: 'id'
    }
  }
}, {
  tableName: 'doctors',
  timestamps: true
});

// İlişkiler
Doctor.belongsTo(Branch, { foreignKey: 'branchId', as: 'branch' });
Branch.hasMany(Doctor, { foreignKey: 'branchId', as: 'doctors' });

module.exports = Doctor; 