const express = require("express");

const bodyParser = require("body-parser");
const UsersRouter = require("./routes/users");
const IndexRouter = require("./routes/index");
const CommentRouter = require("./routes/comments");
const PostRouter = require("./routes/posts");
const UserRouter = require("./routes/user");
const UserService = require("./services/user_service");

const passport = require("passport");

const fs = require("fs");
const User = require("./models/user");

const cors = require("cors");
const path = require("path"); //Accessing file system

const app = express();

require("./mongo-connection");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const pathToKey = path.join(__dirname, "./auth", "pub_key.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");

const opts = {
  //Passport verification process
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256']
};

const strategy = new JwtStrategy(opts, function (jwt_payload, done) {
  console.log("jwt_payload");

  // We will assign the `sub` property on the JWT to the database ID of user
  User.findOne({ _id: jwt_payload.sub }, function (err, user) {
    // This flow look familiar?  It is the same as when we implemented
    // the `passport-local` strategy
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

passport.use(strategy);

app.use(passport.initialize());

app.use(bodyParser.json());

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors()); //Disable cors policy

app.use("/", IndexRouter);
app.use("/users", UsersRouter);
app.use("/comments", CommentRouter);
app.use("/posts", PostRouter);
app.use("/user", UserRouter);

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});

module.exports = app;
