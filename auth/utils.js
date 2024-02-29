const crypto = require("crypto");
const jsonwebtoken = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

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
function validatePassword(password, hash, salt) {
  var verifyHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === verifyHash;
}
 
//We are associated the JWT 'sub' payload property to the current logged MongoDB user ID.
function issueJWT(user) {
  const _id = user._id;

  const expiresIn = "1d"; //1 day.

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signOpts = {
    expiresIn,
    algorithm: "RS256",
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, signOpts);

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn
  };
}

module.exports.genPassword = genPassword;
module.exports.validatePassword = validatePassword;
module.exports.issueJWT = issueJWT;
