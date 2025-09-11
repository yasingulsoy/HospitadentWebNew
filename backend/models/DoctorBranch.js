const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const DoctorBranch = sequelize.define('DoctorBranch', {
  doctorId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  branchId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  isPrimary: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'doctor_branches',
  timestamps: false
});

module.exports = DoctorBranch;


