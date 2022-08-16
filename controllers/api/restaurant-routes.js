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

// GET 1 restaurant, display all dishes - /api/restaurant/:id
router.get("/:id", (req, res) => {
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
          "picture_id",
        ],
      },
    ],
  }).then((dbRestaurantData) => {
    console.log(dbRestaurantData.get({plain: true}));
    const restaurant = dbRestaurantData.get({ plain: true });
    res.render("menu", {
      restaurant,
      loggedIn: req.session.loggedIn,
    });
  });
});

// CREATE a new restaurant
router.post("/", (req, res) => {
  Restaurant.create({
    name: req.body.name,
    how_expensive: req.body.how_expensive,
    type_of_food: req.body.type_of_food,
    picture_id: req.body.picture_id,
  })
    .then((dbRestaurantData) => res.json(dbRestaurantData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
