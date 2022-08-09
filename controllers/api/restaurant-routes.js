const router = require("express").Router();
const { Restaurant, Dish } = require("../../models");

// GET all restaurants, /api/restaurant
router.get("/", (req, res) => {
    Restaurant.findAll()
        .then((dbRestaurantData) => {
            // const restaurants = dbRestaurantData.map((restaurant) =>
            //     restaurant.get({ plain: true })
            // );
            res.json(dbRestaurantData);
            // res.render("/", restaurants);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET 1 restaurant, display all dishes
router.get("/restaurant/:id", (req, res) => {
    Restaurant.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Dish,
                attributes: [
                    "id",
                    "price",
                    "description",
                    "name",
                    "vegetarian",
                    "gluten_free",
                ],
            },
        ],
    }).then((dbRestaurantData) => {
        const restaurant = dbRestaurantData.get({ plain: true });
        res.render("/", restaurant);
    });
});

module.exports = router;
