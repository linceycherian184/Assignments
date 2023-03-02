const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const user = sequelize.define('expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  expense: {
    type: Sequelize.STRING,
  },
  amount: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  
  }
});

module.exports = user;