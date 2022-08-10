const User = require("./User");
const Restaurant = require("./Restaurant");
const Dish = require("./Dish");
const Cart = require("./Cart");
const CartItem = require("./CartItem");

Restaurant.hasMany(Dish, {
  foreignKey: "restaurant_id",
  onDelete: "CASCADE", //do this here or in the other side of the relationship?
});

Dish.belongsTo(Restaurant, {
  foreignKey: "restaurant_id",
});

// need to stipulate relationship between User, Restaurant, Dish, and Cart...think on this.
User.hasMany(Cart, {
  foreignKey: "user_id",
});

Cart.belongsTo(User, {
  foreignKey: "user_id",
});

Cart.belongsTo(Restaurant, {
  foreignKey: "restaurant_id",
}); //because you can only put items in a cart from a single restaurant

CartItem.belongsTo(Cart, {
  foreignKey: "cart_id",
});

Cart.hasMany(CartItem, {
  foreignKey: "cart_id",
});

// dish doesn't belong to a user, belongs to a R
// cart just a list of dishes a user wants
// cart has array of dishes, associated with a user
//

module.exports = { User, Restaurant, Dish, Cart, CartItem };
