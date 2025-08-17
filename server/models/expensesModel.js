
const sequelize = require("../config/db.js");
const { Sequelize } = require("sequelize");

const Expenses = sequelize.define("expense", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id"
        }
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
        allowNull: true
    },
    

});
module.exports = Expenses;