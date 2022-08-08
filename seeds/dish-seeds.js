const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const dishdata = [
  {
    name: "",
    price: "",
    description: "",
    vegetarian: "",
    gluten_free: "",
    restaurant: "",
  },
  {
    name: "",
    price: "",
    description: "",
    vegetarian: "",
    gluten_free: "",
    restaurant: "",
  },
  {
    name: "",
    price: "",
    description: "",
    vegetarian: "",
    gluten_free: "",
    restaurant: "",
  },
  {
    name: "",
    price: "",
    description: "",
    vegetarian: "",
    gluten_free: "",
    restaurant: "",
  },
  {
    name: "",
    price: "",
    description: "",
    vegetarian: "",
    gluten_free: "",
    restaurant: "",
  },
  {
    name: "",
    price: "",
    description: "",
    vegetarian: "",
    gluten_free: "",
    restaurant: "",
  },
  {
    name: "",
    price: "",
    description: "",
    vegetarian: "",
    gluten_free: "",
    restaurant: "",
  },
  {
    name: "",
    price: "",
    description: "",
    vegetarian: "",
    gluten_free: "",
    restaurant: "",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedDishes;
