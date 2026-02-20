require("dotenv").config(); // Load environment variables

// 1. Import your database connection
const sequelize = require("./config/db.js");

// 2. Import ALL your models 
const User = require("./models/user.js"); 
const Budgets = require("./models/budget.js");
const Expenses = require("./models/expense.js");
const Income = require("./models/income.js");

const syncDatabase = async () => {
    try {
        console.log("Connecting to the database...");
        await sequelize.authenticate();
        console.log("Connection established successfully.");

        console.log("Dropping all existing tables and recreating from zero...");
        
        // { force: true } tells Sequelize to DROP all tables and recreate them fresh.
        await sequelize.sync({ force: true });
        
        console.log("✅ Database completely wiped and freshly recreated without errors!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Error syncing the database:", error);
        process.exit(1);
    }
};

syncDatabase();