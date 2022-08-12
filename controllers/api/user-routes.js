const router = require("express").Router();
const { User } = require("../../models");

// needs a route for login, /api/user/login, which would just be called "/login" in this file
// create a user, /api/user
router.post("/", (req, res) => {
  // expects {username:'Lernantino',email:'lernantino@gmail.com',password:'password2234'}
  User.create({
    // pass in key/value pairs where keys are what's defined in User model, and values are what we get from req.body
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
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
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

// user logout, /api/user/logout
router.post("/logout", (req, res) => {});

module.exports = router;
