const { Restaurant, User } = require("../models");

const restaurantdata = [
  {
    name: "",
    how_expensive: "$",
    type_of_food: "",
  },
  {
    name: "",
    how_expensive: "$$",
    type_of_food: "",
  },
  {
    name: "",
    how_expensive: "$$$",
    type_of_food: "",
  },
  {
    name: "",
    how_expensive: "",
    type_of_food: "$$",
  },
  {
    name: "",
    how_expensive: "",
    type_of_food: "$",
  },
  {
    name: "",
    how_expensive: "",
    type_of_food: "$",
  },
  {
    name: "",
    how_expensive: "",
    type_of_food: "$",
  },
  {
    name: "",
    how_expensive: "",
    type_of_food: "$$$",
  },
];

const seedRestaurant = () => Restaurant.(restaurantdata);

module.exports = seedRestaurant;

