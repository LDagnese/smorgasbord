const router = require("express").Router();
const { User, Dish, CartItem, Cart } = require("../../models");

router.get("/", (req, res) => {
    CartItem.findAll({
        where: {
            cart_id: req.session.user_id,
        },
    })
        .then((dbCartData) => {
            const cart = dbCartData.map((cartItems) =>
                cartItems.get({ plain: true })
            );
            console.log(cart);
            // const posts = dbPostData.map((post) => post.get({ plain: true }));
            res.render("cart", {
                cart,
                loggedIn: req.session.loggedIn,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// creates a cartItem when a user adds a dish to their cart
router.post("/", (req, res) => {
    CartItem.create({
        dish_id: req.body.dish_id,
        name: req.body.name,
        price: req.body.price,
        cart_id: req.session.user_id,
    }).catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});

// deletes all cart items with a certain cart id
router.delete("empty/:id", (req, res) => {
    CartItem.destroy_all({
        //see if this throws error
        where: {
            cart_id: req.params.id,
        },
    })
        .then((dbCartData) => {
            if (!dbCartData) {
                res.status(404).json({
                    message: "No cart found with this id",
                });
                return;
            }
            res.json(dbCartData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// deletes a single cart item with a certain cartItem id
router.delete("delete/:id", (req, res) => {
    CartItem.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbCartItemData) => {
            if (!dbCartItemData) {
                res.status(404).json({
                    message: "No cart item found with this id",
                });
                return;
            }
            res.json(dbCartItemData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    return;
});

router.post("create/", (req, res) => {
    Cart.create({
        user_id: req.session.user_id,
    })
        .then((dbCartData) => {
            res.json(dbCartData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;

// somehow create a cart when a user is created - can't do it within the same router.post for a user, but it's not working with a router.post for a cart
// not sure why

// need to
