// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

class Dish extends Model {}

Dish.init(
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
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    vegetarian: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    gluten_free: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "restaurant",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "dish",
  }
);

module.exports = Dish;
