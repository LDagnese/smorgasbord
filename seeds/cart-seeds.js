const { Cart } = require('../models');

const cartdata = [
    {
        user_id: '' ,
        restaurant_id: '' ,
        dish_id
    },
    {
        user_id: '',
        restaurant_id: '', 
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
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
