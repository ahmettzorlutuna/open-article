const express = require("express");

const bodyParser = require("body-parser");
const UsersRouter = require("./routes/users");
const IndexRouter = require("./routes/index");
const CommentRouter = require("./routes/comments");
const PostRouter = require("./routes/posts");

const passport = require("passport-jwt");
const cors = require("cors");
const path = require("path"); //Accessing file system

require("./mongo-connection");

const app = express();

app.set("view engine", "pug");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/css")); //İnclude css files

app.use(cors()); //Disable cors policy

app.use("/", IndexRouter);
app.use("/users", UsersRouter);
app.use("/comments", CommentRouter);
app.use("/posts", PostRouter);

module.exports = app;
