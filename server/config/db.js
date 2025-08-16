const { Sequelize } = require('sequelize'); 
require('dotenv').config(); 
const sequelize = new Sequelize(process.env.DB_URL, { 
dialect: 'postgres', 
logging: true, // Set to true to see SQL queries in console 
}); 
module.exports = sequelize;