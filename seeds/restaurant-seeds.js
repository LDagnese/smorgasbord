const { Restaurant } = require("../models");

const restaurantData = [
  {
    name: "Plastic",
    how_expensive: 3,
    type_of_food: "Asphalt Paving",
    picture_url: "http://dummyimage.com/200x100.png/dddddd/000000",
  },
  {
    name: "Plexiglass",
    how_expensive: 4,
    type_of_food: "Granite Surfaces",
    picture_url: "http://dummyimage.com/126x100.png/ff4444/ffffff",
  },
  {
    name: "Glass",
    how_expensive: 1,
    type_of_food: "Waterproofing & Caulking",
    picture_url: "http://dummyimage.com/198x100.png/dddddd/000000",
  },
  {
    name: "Granite",
    how_expensive: 1,
    type_of_food: "Glass & Glazing",
    picture_url: "http://dummyimage.com/149x100.png/cc0000/ffffff",
  },
  {
    name: "Granite",
    how_expensive: 1,
    type_of_food: "Masonry & Precast",
    picture_url: "http://dummyimage.com/170x100.png/dddddd/000000",
  },
  {
    name: "Granite",
    how_expensive: 4,
    type_of_food: "Masonry & Precast",
    picture_url: "http://dummyimage.com/177x100.png/ff4444/ffffff",
  },
  {
    name: "Steel",
    how_expensive: 4,
    type_of_food: "RF Shielding",
    picture_url: "http://dummyimage.com/170x100.png/dddddd/000000",
  },
  {
    name: "Glass",
    how_expensive: 3,
    type_of_food: "Marlite Panels (FED)",
    picture_url: "http://dummyimage.com/187x100.png/dddddd/000000",
  },
  {
    name: "Brass",
    how_expensive: 4,
    type_of_food: "Electrical",
    picture_url: "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
  },
  {
    name: "Aluminum",
    how_expensive: 3,
    type_of_food: "Site Furnishings",
    picture_url: "http://dummyimage.com/182x100.png/dddddd/000000",
  },
  {
    name: "Glass",
    how_expensive: 3,
    type_of_food: "Prefabricated Aluminum Metal Canopies",
    picture_url: "http://dummyimage.com/237x100.png/cc0000/ffffff",
  },
  {
    name: "Rubber",
    how_expensive: 3,
    type_of_food: "Electrical and Fire Alarm",
    picture_url: "http://dummyimage.com/188x100.png/dddddd/000000",
  },
  {
    name: "Wood",
    how_expensive: 1,
    type_of_food: "Drywall & Acoustical (FED)",
    picture_url: "http://dummyimage.com/133x100.png/ff4444/ffffff",
  },
  {
    name: "Glass",
    how_expensive: 3,
    type_of_food: "Doors, Frames & Hardware",
    picture_url: "http://dummyimage.com/203x100.png/5fa2dd/ffffff",
  },
  {
    name: "Rubber",
    how_expensive: 3,
    type_of_food: "Overhead Doors",
    picture_url: "http://dummyimage.com/231x100.png/ff4444/ffffff",
  },
];
const seedRestaurant = () =>
  Restaurant.bulkCreate(restaurantData, { individualHooks: true });

module.exports = seedRestaurant;
