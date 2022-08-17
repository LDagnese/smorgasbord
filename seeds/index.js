const seedDish = require("./dish-seeds");
const seedRestaurant = require("./restaurant-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("--------------");
    await seedRestaurant();
    console.log("--------------");
    await seedDish();
    console.log("--------------");

    process.exit(0);
};

seedAll();
