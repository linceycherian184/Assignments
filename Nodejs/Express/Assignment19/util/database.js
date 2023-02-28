const Sequelize = require('sequelize');

const sequelize = new Sequelize('project2', 'root', 'admin123', {
  dialect: 'mysql',
  host: 'localhost',
});

sequelize.sync().then(() => {
  console.log('User table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

module.exports = sequelize;
