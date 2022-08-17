const { Restaurant } = require("../models");

const restaurantData = [
  {
    name: "Transcof",
    how_expensive: 1,
    type_of_food: "French",
    picture_id: "smorgasbord/Restaurant1",
  },
  {
    name: "Mat Lam Tam",
    how_expensive: 4,
    type_of_food: "Korean",
    picture_id: "smorgasbord/Restaurant4",
  },
  {
    name: "Sonair",
    how_expensive: 3,
    type_of_food: "American",
    picture_id: "smorgasbord/Restaurant4",
  },
  {
    name: "Subin",
    how_expensive: 1,
    type_of_food: "Chinese",
    picture_id: "smorgasbord/Restaurant1",
  },
  {
    name: "Gembucket",
    how_expensive: 3,
    type_of_food: "Italian",
    picture_id: "smorgasbord/Restaurant2",
  },
  {
    name: "Y-find",
    how_expensive: 3,
    type_of_food: "Italian",
    picture_id: "smorgasbord/Restaurant1",
  },
  {
    name: "Transcof",
    how_expensive: 4,
    type_of_food: "Spanish",
    picture_id: "smorgasbord/Restaurant4",
  },
  {
    name: "Zaam-Dox",
    how_expensive: 3,
    type_of_food: "American",
    picture_id: "smorgasbord/Restaurant3",
  },
  {
    name: "Job",
    how_expensive: 4,
    type_of_food: "Spanish",
    picture_id: "smorgasbord/Restaurant1",
  },
  {
    name: "Gembucket",
    how_expensive: 4,
    type_of_food: "Italian",
    picture_id: "smorgasbord/Restaurant4",
  },
  {
    name: "Holdlamis",
    how_expensive: 4,
    type_of_food: "Korean",
    picture_id: "smorgasbord/Restaurant1",
  },
  {
    name: "Tempsoft",
    how_expensive: 4,
    type_of_food: "Spanish",
    picture_id: "smorgasbord/Restaurant4",
  },
  {
    name: "Solarbreeze",
    how_expensive: 1,
    type_of_food: "Spanish",
    picture_id: "smorgasbord/Restaurant1",
  },
  {
    name: "Ventosanzap",
    how_expensive: 4,
    type_of_food: "Spanish",
    picture_id: "smorgasbord/Restaurant4",
  },
  {
    name: "Tin",
    how_expensive: 1,
    type_of_food: "Italian",
    picture_id: "smorgasbord/Restaurant2",
  },
];
const seedRestaurant = () =>
  Restaurant.bulkCreate(restaurantData, { individualHooks: true });

module.exports = seedRestaurant;
