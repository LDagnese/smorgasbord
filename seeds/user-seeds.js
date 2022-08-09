const { User } = require("../models");

const userdata = [
  {
    email: "",
    name: "",
    password: "",
  },
  {
    email: "",
    name: "",
    password: "",
  },
  {
    email: "",
    name: "",
    password: "",
  },
  {
    email: "",
    name: "",
    password: "",
  },
  {
    email: "",
    name: "",
    password: "",
  },
  {
    email: "",
    name: "",
    password: "",
  },
  {
    email: "",
    name: "",
    password: "",
  },
  {
    email: "",
    name: "",
    password: "",
  },
];

const seedUsers = () =>
  User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;
