const router = require("express").Router();
const { User, Dish, CartItem, Cart } = require("../../models");

// creates a cartItem when a user adds a dish to their cart
router.post("/", (req, res) => {
    CartItem.create({
        dish_id: req.body.dish_id,
        name: req.body.name,
        price: req.body.price,
        cart_id: req.body.cart_id,
    })
        .then((dbCartItemData) => {
            res.json(dbCartItemData);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// deletes all cart items with a certain cart id
router.delete("empty/:id", (req, res) => {
    CartItem.destroy_all({ //see if this throws error
        where: {
            cart_id: req.params.id,
        },
    }).
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
    CartItem.findOne({
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
});

module.exports = router;
