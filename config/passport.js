const path = require("path");
const fs = require("fs");
const User = require("../models/user");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const pathToKey = path.join(__dirname, "../auth", "pub_key.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

const options = {
  //Passport verification process
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};

const strategy = new JwtStrategy(options, (payload, done) => {
  User.findOne({ _id: payload.sub })
    .then((user) => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => done(err, false)); //Or create a new account
});

module.exports = (passport) => {
  passport.use(strategy); 
};
