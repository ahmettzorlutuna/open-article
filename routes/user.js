const express = require("express");
const router = express.Router();
const utils = require("../auth/utils");
const User = require("../models/user");
const passport = require("passport");

router.get("/protected",passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.json({ success: true, msg: "Girdin" });
});

router.post("/login", async (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user)
        res
          .status(401)
          .json({ success: false, msg: "Could not find the user!" });

      const isValid = utils.validatePassword(
        req.body.password,
        user.hash,
        user.salt
      );
      if (isValid) {
        //We are not issued the jwt with user yet.
        const tokenObject = utils.issueJWT(user);

        res.status(200).json({
          success: true,
          token: tokenObject.token,
          expiresIn: tokenObject.expiresIn,
        });
      } else {
        res
          .status(401)
          .json({ success: false, msg: "You entered the wrong password" });
      }
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/register", (req, res, next) => {});

router.post("/register", async (req, res, next) => {
  const saltHash = utils.genPassword(req.body.password);

  const hash = saltHash.hash;
  const salt = saltHash.salt;

  const newUser = new User({
    username: req.body.username,
    password: hash + salt,
    hash: hash,
    salt: salt,
  });

  try {
    newUser.save().then((user) => {
      res.json({ success: true, user: user });
    });
  } catch (err) {
    res.json({ success: false, msg: err });
  }
});
module.exports = router;
