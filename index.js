const express = require("express");

const bodyParser = require("body-parser");
const UsersRouter = require("./routes/users");
const IndexRouter = require("./routes/index");
const CommentRouter = require("./routes/comments");
const PostRouter = require("./routes/posts");
const UserRouter = require("./routes/user");

const passport = require("passport");
const cors = require("cors");
const path = require("path"); //Accessing file system

require("./mongo-connection");

//Passed global passport library object into the configuration function
require("./config/passport")(passport);

const app = express();

//İnitialized the passport js object on every request
app.use(passport.initialize());

// app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/frontend/public")));

app.use(express.static(__dirname + "/css")); //İnclude css files

app.use(cors()); //Disable cors policy

app.use("/", IndexRouter);
app.use("/users", UsersRouter);
app.use("/comments", CommentRouter);
app.use("/posts", PostRouter);
app.use("/user", UserRouter);

module.exports = app;
