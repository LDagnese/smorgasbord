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
      type: DataTypes.STRING,
      allowNull: false,
    },
    how_expensive: {
      //maybe make it a number and then convert to number of $ displayed
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
    // vegetarian: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: false,
    // },
    // gluten_free: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: false,
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "restaurant",
  }
);

module.exports = Restaurant;
