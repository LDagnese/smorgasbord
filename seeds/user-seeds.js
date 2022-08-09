const { User } = require("../models");

const userdata = [
  {
    email: "avarley0@google.com.hk",
    name: "Alric",
    password: "275YlEhBt",
  },
  {
    email: "cvenediktov1@squarespace.com",
    name: "Corabelle",
    password: "F5Z4enEHJccH",
  },
  {
    email: "eskitteral4@yandex.ru",
    name: "Edsel",
    password: "nKoFJcRFCMO",
  },
  {
    email: "lmonelli5@ted.com",
    name: "Loleta",
    password: "NUJpsTn",
  },
  {
    email: "kclewett6@oakley.com",
    name: "Karmen",
    password: "ZazrdNsBaTj",
  },
  {
    email: "dwehner8@nsw.gov.au",
    name: "Darla",
    password: "eVhSGq3X",
  },
  {
    email: "apetria@drupal.org",
    name: "Ami",
    password: "5FeTmSWRQ8Lp",
  },
  {
    email: "dmorlb@wikispaces.com",
    name: "Dore",
    password: "2zmsFw",
  },
];

const seedUsers = () =>
  User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;
