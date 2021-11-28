"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CusedWordsTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CusedWordsTable.init(
    {
      word: DataTypes.STRING,
      language: DataTypes.STRING,
      tag: DataTypes.STRING,
      meaning: DataTypes.CITEXT,
      example: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CusedWordsTable",
    }
  );
  return CusedWordsTable;
};
