const { Sequelize } = require('sequelize');

// database connection:
const db = new Sequelize('gigs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
  });


module.exports = db;