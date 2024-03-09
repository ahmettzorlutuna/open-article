const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const pathToKey = path.join(`${__dirname}/priv_key.pem`);
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");

//Creating passwords salt and hash. We are hashing the plaintext password before the storing on the db.
function genPassword(password) {

  var salt = crypto.randomBytes(32).toString("hex");
  var genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return {
    salt: salt,
    hash: genHash,
  };
}

//We decrypted the hash using the salt. Then compares the hash/salt with the password provided from user.
function validatePassword(password,  hash, salt) {
  var verifyHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === verifyHash;
}

//We are associated the JWT 'sub' payload property to the current logged MongoDB user ID.
function issueJWT(user) {

  const expiresIn = "1d"; //1 day.

  const payload = {
    sub: user._id,
    iat: Date.now()
  };
  console.log(payload.sub);

  const signedToken = jwt.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });


  return {
    token: "Bearer " + signedToken,
    expiresIn: expiresIn
  };
}

module.exports.genPassword = genPassword;
module.exports.validatePassword = validatePassword;
module.exports.issueJWT = issueJWT;
