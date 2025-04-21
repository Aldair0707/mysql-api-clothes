'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableDescription = await queryInterface.describeTable('Clothes');

    // Verificar si la columna 'quantity' ya existe
    if (!tableDescription.quantity) {
      return queryInterface.addColumn('Clothes', 'quantity', {
        type: Sequelize.INTEGER,
        defaultValue: 0
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Clothes', 'quantity');
  }
};
