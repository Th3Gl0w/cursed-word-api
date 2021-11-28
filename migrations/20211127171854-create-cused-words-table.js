"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CusedWordsTables", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      word: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      tag: {
        type: Sequelize.STRING,
      },
      meaning: {
        type: Sequelize.CITEXT,
      },
      example: {
        type: Sequelize.CITEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("CusedWordsTables");
  },
};
