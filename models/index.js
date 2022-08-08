const User = require("./User");
const Restaurant = require("./Restaurant");
const Dish = require("./Dish");
const Cart = require("./Cart");

Restaurant.hasMany(Dish, {
  foreignKey: "restaurant_id",
  onDelete: "CASCADE", //do this here or in the other side of the relationship?
});

Dish.belongsTo(Restaurant, {
  foreignKey: "restaurant_id",
});

// need to stipulate relationship between User, Restaurant, Dish, and Cart...think on this.

module.exports = { User, Restaurant, Dish, Cart };
