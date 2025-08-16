
const sequelize = require("../config/db.js");
const { Sequelize } = require("sequelize");

const User = sequelize.define("User",{
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,

    },
    userName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    },
    email :{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len:[8, 20]
        }    
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
});

module.exports = User;

