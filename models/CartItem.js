// only X properties - id, cart_id (references cart), and then quantity? field for comments?
// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

class CartItem extends Model {}

CartItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        dish_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "dish",
                key: "id",
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        cart_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "cart",
                key: "id",
            },
        }, //could potentially add a property for special comments, request, etc. Not MVP, but a thought
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "cart",
    }
);

module.exports = CartItem;
