// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

class Restaurant extends Model {}

Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    how_expensive: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        contains: "$",
      },
    },
    type_of_food: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "restaurant",
  }
);

module.exports = Restaurant;
