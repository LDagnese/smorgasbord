const seedCart = require("./cart-seeds");
const seedDish = require("./dish-seeds");
const seedRestaurant = require("./restaurant-seeds");
const seedUser = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");

  await seedCart();
  console.log("--------------");

  await seedDish();
  console.log("--------------");

  await seedRestaurant();
  console.log("--------------");

  await seedUser();
  console.log("--------------");

  process.exit(0);
};

seedAll();
