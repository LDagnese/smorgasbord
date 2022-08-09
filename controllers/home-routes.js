const router = require("express").Router();
const { Restaurant, User, Dish, Cart } = require("../models");

router.get("/", (req, res) => {
    Restaurant.findAll().then((dbRestaurantData) => {
        const restaurants = dbRestaurantData.map((restaurant) =>
            restaurant.get({ plain: true })
        );
        res.render("homepage", {
            restaurants,
        });
    });
});

module.exports = router;
