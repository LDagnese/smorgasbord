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

// LOG in route for the homepage
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    req.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
