const router = require("express").Router();
const { User, Cart } = require("../../models");

// needs a route for login, /api/user/login, which would just be called "/login" in this file
// create a user, /api/user
router.post("/", (req, res) => {
    // expects {username:'Lernantino',email:'lernantino@gmail.com',password:'password2234'}
    User.create({
        // pass in key/value pairs where keys are what's defined in User model, and values are what we get from req.body
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
        .then((dbUserData) => {
            res.json(dbUserData);
            // Louie, session stuff below taken from Module 14, edit as you will, left here in case you want to frankenstein it
            // req.session.save(() => {
            //     req.session.user_id = dbUserData.id;
            //     req.session.username = dbUserData.username;
            //     req.session.loggedIn = true;

            //     res.json(dbUserData);
            // });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// user login, /api/user/login
router.post("/login", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        },
    }).then((dbUserData) => {
        if (!dbUserData) {
            res.status(400).json({
                message: "No user with that email address.",
                // dont indicate which failed, username OR password. more secure?
            });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect password!" });
            return;
        }
    });

    // check to see if a cart exists for this user and if it does not, then create one.
    Cart.findOne({
        where: {
            user_id: req.body.id, //I don't think this will work, need to extract ID somehow - session?
        },
    }).then((dbCartData) => {
        if (!dbCartData) {
            // no cart, then you need one ->
            Cart.create({
                user_id: req.body.id, //maybe get from session?
            }).then((dbCartData) => {
                res.render("main", {
                    cartid, //need to be able to pass cart id value into the main.handlebars to use later
                });
            });
        }
    });
    // when it has been logged in, need to create a new cart
});

// user logout, /api/user/logout
router.post("/logout", (req, res) => {});

module.exports = router;
