"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add "date" column with default value for existing rows
    await queryInterface.addColumn("budgets", "date", {
      type: Sequelize.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_DATE'), // sets today for existing rows
    });

    // Add "description" column (nullable is fine)
    await queryInterface.addColumn("budgets", "description", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("budgets", "date");
    await queryInterface.removeColumn("budgets", "description");
  },
};