const sequelize = require("../config/connection");
const { Restaurant } = require("../models");

const restaurantData = [
  {
    name: "Glass",
    how_expensive: "1",
    type_of_food: "Face to face demand-driven middleware",
  },
  {
    name: "Aluminum",
    how_expensive: "1",
    type_of_food: "Horizontal solution-oriented service-desk",
  },
  {
    name: "Aluminum",
    how_expensive: "1",
    type_of_food: "Fundamental local focus group",
  },
  {
    name: "Aluminum",
    how_expensive: "1",
    type_of_food: "Self-enabling 5th generation attitude",
  },
  {
    name: "Wood",
    how_expensive: "1",
    type_of_food: "Open-source tangible access",
  },
  {
    name: "Plexiglass",
    how_expensive: "1",
    type_of_food: "Progressive client-server contingency",
  },
  {
    name: "Brass",
    how_expensive: "1",
    type_of_food: "Ameliorated composite matrix",
  },
  {
    name: "Plastic",
    how_expensive: "1",
    type_of_food: "Cloned neutral support",
  },
  {
    name: "Granite",
    how_expensive: "1",
    type_of_food: "Stand-alone composite array",
  },
  {
    name: "Wood",
    how_expensive: "1",
    type_of_food: "Open-source impactful utilisation",
  },
  {
    name: "Granite",
    how_expensive: "1",
    type_of_food: "Synergistic national monitoring",
  },
  {
    name: "Plexiglass",
    how_expensive: "1",
    type_of_food: "Proactive 5th generation process improvement",
  },
  {
    name: "Wood",
    how_expensive: "1",
    type_of_food: "Team-oriented directional project",
  },
  {
    name: "Wood",
    how_expensive: "1",
    type_of_food: "Cross-group actuating budgetary management",
  },
  {
    name: "Brass",
    how_expensive: "1",
    type_of_food: "Reduced homogeneous projection",
  },
];

const seedRestaurant = () =>
  Restaurant.bulkCreate(restaurantData, { individualHooks: true });

module.exports = seedRestaurant;
