const { Cart } = require('../models');

const cartdata = [
    {
        user_id: "",
        restaurant_id: "",
        dish_id
    },
    {
        user_id: "",
        restaurant_id: "", 
        dish_id
    },
    {
        user_id: 
        restaurant_id,
        dish_id
    },
    {
        user_id:
        restaurant_id,
        dish_id
    },
    {
        user_id:
        restaurant_id,
        dish_id
    },
    {
        user_id:
        restaurant_id,
        dish_id
    },
    {
        user_id:
        restaurant_id,
        dish_id
    },
    {
      user_id:
      restaurant_id,
      dish_id,
    }
];

const seedCart = () => Cart.bulkCreate(cartdata);

module.exports = seedCart;
