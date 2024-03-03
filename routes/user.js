const express = require("express");
const router = express.Router();
const utils = require("../auth/utils");
const User = require("../models/user");
const passport = require("passport");
const mongoose = require("mongoose");
const { userService } = require("../services");

router.get("/protected", passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.status(200).json({success: true, msg: "You are authorized !"})
});

router.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user)
      res.status(401).json({ success: false, msg: "Could not find the user!" });

    const isValid = utils.validatePassword(
      req.body.password,
      user.hash,
      user.salt
    );

    if (isValid) {
      //We are not issued the jwt with user yet.
      const tokenObject = utils.issueJWT(user);

      res.status(200).json({ success: true, user: user, token: tokenObject });
    } else {
      res
        .status(401)
        .json({ success: false, msg: "You entered the wrong password" });
    }
  })
  .catch((err) => {
    next(err)
  });
});

router.get("/register", (req, re, next) => {});

router.post("/register", (req, res, next) => {
  const saltHash = utils.genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username: req.body.username,
    password: salt + hash,
    hash: hash,
    salt: salt,
  });

  newUser
    .save()
    .then((user) => {
      const jwt = utils.issueJWT(user);

      res.json({
        success: true,
        user: user,
        token: jwt.token,
        expiresIn: jwt.expires,
      });
    })
    .catch((err) => next(err));
});
module.exports = router;
