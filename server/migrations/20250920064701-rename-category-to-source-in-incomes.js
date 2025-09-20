'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('incomes', 'category', 'source');
  },

  async down(queryInterface, Sequelize) {
    // revert back if needed
    await queryInterface.renameColumn('incomes', 'source', 'category');
  }
};
