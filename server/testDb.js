const sequelize = require('./config/db.js');

// Create a function to test the connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection to the database has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    } finally {
        await sequelize.close();
        console.log("Connection closed.");
    }
}

// Run the function
testConnection();