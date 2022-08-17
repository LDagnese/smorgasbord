const router = require("express").Router();
const { Restaurant, Cart } = require("../models");

router.get("/", (req, res) => {
    Restaurant.findAll().then((dbRestaurantData) => {
        const restaurants = dbRestaurantData.map((restaurant) =>
            restaurant.get({ plain: true })
        );
        res.render("homepage", {
            restaurants,
            loggedIn: req.session.loggedIn,
            //   needs to pass cartId in so we can access it on the page
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
        req.redirect("/"); //think this needs to be res
        return;
    }

    res.render("signup");
});

router.get("/cart", (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("cart", {
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router;
