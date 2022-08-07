const router = require("express").Router();
const { Restaurant, User, Dish, Cart } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

module.exports = router;
