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

const strategy = new JwtStrategy(options, (jwt_payload, done) => {
  User.findOne({id: jwt_payload.sub}, function(err, user) {
    if (err) {
        return done(err, false);
    }
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
        // or you could create a new account
    }
});
});

module.exports = (passport) => {
  passport.use(strategy); 
};
