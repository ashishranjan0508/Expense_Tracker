const sequelize = require("../config/db.js");
const { Sequelize } = require("sequelize");


const Income = sequelize.define('income', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model:'users',
            key: 'id'
        }
    },

    amount: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },

    source: {
        type: Sequelize.STRING,
        allowNull:false,
    },

    note: {
        type: Sequelize.STRING,
        allowNull:true
    },
     
    date: {
        type: Sequelize.DATEONLY,
        allowNull:false
    }

});

module.exports = Income;