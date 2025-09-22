const sequelize = require("../config/db.js");
const { Sequelize } = require("sequelize");

const Budgets = sequelize.define("budget", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
  
});
module.exports = Budgets;
