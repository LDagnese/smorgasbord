const { Restaurant } = require("../models");

const restaurantData = [
  {
    name: "dui luctus",
    how_expensive: 2,
    type_of_food: "italian",
  },
  {
    name: "aenean",
    how_expensive: 4,
    type_of_food: "italian",
  },
  {
    name: "donec pharetra",
    how_expensive: 1,
    type_of_food: "american",
  },
  {
    name: "ut odio cras",
    how_expensive: 4,
    type_of_food: "french",
  },
  {
    name: "viverra eget",
    how_expensive: 4,
    type_of_food: "italian",
  },
  {
    name: "eu",
    how_expensive: 2,
    type_of_food: "korean",
  },
  {
    name: "mattis odio donec",
    how_expensive: 2,
    type_of_food: "french",
  },
  {
    name: "sed",
    how_expensive: 1,
    type_of_food: "mexican",
  },
  {
    name: "ipsum",
    how_expensive: 3,
    type_of_food: "vietnamese",
  },
  {
    name: "enim leo rhoncus",
    how_expensive: 4,
    type_of_food: "chinese",
  },
  {
    name: "sodales sed tincidunt",
    how_expensive: 1,
    type_of_food: "italian",
  },
  {
    name: "viverra eget",
    how_expensive: 1,
    type_of_food: "american",
  },
  {
    name: "nulla",
    how_expensive: 1,
    type_of_food: "french",
  },
  {
    name: "varius integer ac",
    how_expensive: 3,
    type_of_food: "vietnamese",
  },
  {
    name: "sit amet",
    how_expensive: 3,
    type_of_food: "korean",
  },
];

const seedRestaurant = () =>
  Restaurant.bulkCreate(restaurantData, { individualHooks: true });

module.exports = seedRestaurant;
