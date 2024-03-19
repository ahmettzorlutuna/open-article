const express = require("express");

const bodyParser = require("body-parser");
const UsersRouter = require("./routes/users");
const IndexRouter = require("./routes/index");
const CommentRouter = require("./routes/comments");
const PostRouter = require("./routes/posts");
const UserRouter = require("./routes/user");


const passport = require("passport");

const fs = require("fs");
const User = require("./models/user");


const cors = require("cors");
const path = require("path"); //Accessing file system

const app = express();

require("./mongo-connection");


var JwtStrategy = require("passport-jwt").Strategy,
ExtractJwt = require("passport-jwt").ExtractJwt;

const pathToKey = path.join(__dirname, "./auth", "pub_key.pem");
const PUB_KEY = fs.readFileSync(pathToKey, "utf8");


const opts = {
  //Passport verification process
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};

var strategy = new JwtStrategy(opts, function (jwt_payload, done) {
  // We will assign the `sub` property on the JWT to the database ID of user
  User.findOne({id: jwt_payload.sub}, function(err, user) {
    if (err) {
        return done(err, false);
    }
    if (user) {
        console.log("user",user);
        return done(null, user);
    } else {
        return done(null, false);
        // or you could create a new account
    }
});
})

passport.use(strategy);
app.use(passport.initialize());


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static(path.join(__dirname, "/frontend/public")));

app.use(express.static(__dirname + "/css")); //İnclude css files

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
