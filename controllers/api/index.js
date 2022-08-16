const router = require("express").Router();

// const cartRoutes = require("./cart-routes");
const restaurantRoutes = require("./restaurant-routes");
const userRoutes = require("./user-routes");
const cartRoutes = require("./cart-routes");

// router.use("/cart", cartRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/user", userRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
