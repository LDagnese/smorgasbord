const router = require("express").Router();
const { User, Cart } = require("../../models");

// GET all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single user
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No User found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// CREATE a new user
router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
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

  // can I nest this inside of user create? to prevent
/*   Cart.create({
    user_id: req.session.user_id,
  }).then((dbCartData) => {
    res.render("main", {
      user_id, //need to be able to pass cart id value into the main.handlebars to use later
      loggedIn: true,
    });
  }); */
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
        message: "No user with that email address!",
      });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in." });
    });

    /* LD -> I had to comment this out to make the server start, was getting an error */

    /* check to see if a cart exists for this user and if it does not, then create one. */
    // Cart.findOne({
    //   where: {
    //     user_id: req.body.id, //I don't think this will work, need to extract ID somehow - session?
    //   },
    // }).then((dbCartData) => {
    //   if (!dbCartData) {
    //     // no cart, then you need one ->
    //     Cart.create({
    //       user_id: req.body.id, //maybe get from session?
    //     }).then((dbCartData) => {
    //       res.render("main", {
    //         cartid, //need to be able to pass cart id value into the main.handlebars to use later
    //       });
    //     });
    //   }
    // });
    /* when it has been logged in, need to create a new cart */
  });
});

// LOGOUT a User with a session
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
