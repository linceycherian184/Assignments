const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const user = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  amount: {
    type: Sequelize.STRING,
   
  },
  description: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.DATE,
  
  },
  email: {
    type: Sequelize.STRING,
    
  }
});

module.exports = user;