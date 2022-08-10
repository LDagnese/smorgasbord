const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    email: "lilliecat3@gmail.com",
    name: "lillie",
    password: "password111",
  },
  {
    email: "lizwizz22@gmail.com",
    name: "golly",
    password: "password111",
  },
  {
    email: "angsbran54@gmail.com",
    name: "angie",
    password: "password111",
  },
  {
    email: "jannann1@gmail.com",
    name: "jan",
    password: "password111",
  },
  {
    email: "louozzz@gmail.com",
    name: "louie",
    password: "password111",
  },
  {
    email: "mattyran@gmail.com",
    name: "mat",
    password: "password111",
  },
];

const seedUsers = () =>
  User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;
