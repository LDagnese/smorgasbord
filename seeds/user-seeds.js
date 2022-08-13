const { User } = require("../models");

const userdata = [
  {
    email: "lilliecat3@gmail.com",
    username: "lillie",
    password: "password111",
  },
  {
    email: "lizwizz22@gmail.com",
    username: "golly",
    password: "password111",
  },
  {
    email: "angsbran54@gmail.com",
    username: "angie",
    password: "password111",
  },
  {
    email: "jannann1@gmail.com",
    username: "jan",
    password: "password111",
  },
  {
    email: "louozzz@gmail.com",
    username: "louie",
    password: "password111",
  },
  {
    email: "mattyran@gmail.com",
    username: "mat",
    password: "password111",
  },
];

const seedUsers = () =>
  User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;
