const router = require("express").Router();

// const cartRoutes = require("./cart-routes");
const restaurantRoutes = require("./restaurant-routes");
const userRoutes = require("./user-routes");

// router.use("/cart", cartRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/user", userRoutes);

module.exports = router;
