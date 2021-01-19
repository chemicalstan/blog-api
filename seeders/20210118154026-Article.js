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

    await queryInterface.bulkInsert("Articles", [
      {
        title: "Post one",
        content:
        "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Post two",
        content:
        "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Post three",
        content: "This is post three",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Post four",
        content:
        "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        userId: 3,
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
