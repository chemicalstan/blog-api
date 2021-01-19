"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Users", [
      {
        name: "Stanley Okonkwo",
        email: "chemicalstan15@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "John Doe",
        email: "jdoe@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Halima Ameh",
        email: "hameh@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Articles", null, {});
  }
};
