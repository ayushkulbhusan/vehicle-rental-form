'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vehicles', [
      // Hatchback
      { modelName: 'Maruti Alto', vehicleTypeId: 1, createdAt: new Date(), updatedAt: new Date() },
      // Sedan
      { modelName: 'Honda City', vehicleTypeId: 2, createdAt: new Date(), updatedAt: new Date() },
      // SUV
      { modelName: 'Hyundai Creta', vehicleTypeId: 3, createdAt: new Date(), updatedAt: new Date() },
      // Cruiser
      { modelName: 'Royal Enfield Classic', vehicleTypeId: 4, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
