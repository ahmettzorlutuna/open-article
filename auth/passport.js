const path = require("path");
const fs = require("fs");
const User = require("../models/user");
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const pathToKey = path.join(__dirname, "../auth", "pub_key.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

const options = {
  //Passport verification process
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};


module.exports = (passport) => {
  // The JWT payload is passed i    nto the verify callback
  passport.use(new JwtStrategy(options, function(jwt_payload, done) {
      
      // We will assign the `sub` property on the JWT to the database ID of user
      User.findOne({_id: jwt_payload.sub}, function(err, user) {
          
          if (err) {
              return done(err, false);
          }
          if (user) {
              return done(null, user);
          } else {  
              return done(null, false);
          }
          
      });
      
  }));
}
