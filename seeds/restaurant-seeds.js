const { Restaurant } = require("../models");

const restaurantData = [
  {
    name: "Stim",
    how_expensive: 4,
    type_of_food: "mexican",
  },
  {
    name: "Opela",
    how_expensive: 2,
    type_of_food: "mexican",
  },
  {
    name: "Toughjoyfax",
    how_expensive: 3,
    type_of_food: "pizza",
  },
  {
    name: "Voltsillam",
    how_expensive: 4,
    type_of_food: "fancy",
  },
  {
    name: "Toughjoyfax",
    how_expensive: 3,
    type_of_food: "mexican",
  },
  {
    name: "Ventosanzap",
    how_expensive: 4,
    type_of_food: "pizza",
  },
  {
    name: "Daltfresh",
    how_expensive: 2,
    type_of_food: "fast food",
  },
  {
    name: "Kanlam",
    how_expensive: 3,
    type_of_food: "german",
  },
  {
    name: "Cardify",
    how_expensive: 3,
    type_of_food: "pizza",
  },
  {
    name: "Overhold",
    how_expensive: 3,
    type_of_food: "chinese",
  },
  {
    name: "Bitchip",
    how_expensive: 3,
    type_of_food: "bistro-fare",
  },
  {
    name: "Mat Lam Tam",
    how_expensive: 1,
    type_of_food: "american",
  },
  {
    name: "Rank",
    how_expensive: 3,
    type_of_food: "german",
  },
  {
    name: "Regrant",
    how_expensive: 3,
    type_of_food: "pizza",
  },
  {
    name: "Subin",
    how_expensive: 1,
    type_of_food: "pizza",
  },
];
const seedRestaurant = () =>
  Restaurant.bulkCreate(restaurantData, { individualHooks: true });

module.exports = seedRestaurant;
