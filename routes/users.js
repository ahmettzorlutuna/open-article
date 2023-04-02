const express = require("express");
const router = express.Router();
const user_database = require("../database");

//Users
router.get("/", async (req, res) => {
  const users = await user_database.load();
  res.render("users", { users });
});

//User Detail
router.get("/:id", async (req, res) => {
  const user = await user_database.find(req.params.id);
  if (!user) return res.status(404).send("Cannot get user");
  //if(!user.followers) return res.status(404).send('Cannot find followings or followers')
  res.render("user", { user });
});

//Delete User
router.delete("/:userId", async (req, res) => {
  const user = user_database.removeById(req.params.userId);
  res.send(user);
});

//New User
router.post("/", async (req, res) => {
  await user_database.insert(req.body);
  res.send("Ok");
});

//New post
router.post("/:userId", async (req, res) => {
  const { name, content } = req.body;
  const { userId } = req.params;
  const user = await user_database.find(userId);
  const newPost = user.createPost(req.body);
  await user.save();
  res.send(newPost);
});

//Follow
router.post("/follow/:userId/:userId2", async (req, res) => {
  const { userId, userId2 } = req.params;
  const user = await user_database.find(userId);
  const user2 = await user_database.find(userId2);
  user.follow(user2);
  await user.save();
  await user2.save();
  res.send("Ok");
});

//Post Detail
router.get("/article/:postId", async (req, res) => {
  const { postId } = req.params;
  const post = await user_database.findPostById(postId);
  res.render("post", { post });
});

//Comment Post
router.post("/comment/:userId/:postId", async (req, res) => {
  const { postId, userId } = req.params;
  const {commentName, commentContent} = req.body
  const user = await user_database.find(userId);
  const post = await user_database.findPostById(postId);
  const commented = user.makeCommentById(post, {commentName, commentContent});
  const result = user_database.updatePostById(post._id, post)
  console.log(result)
  res.status(200).send(post);
});

//Like Post
router.post("/like/:userId/:postId", async (req, res) => {
  const { postId, userId } = req.params;
  const user = await user_database.find(userId);
  const post = await user_database.findPostById(postId);
  user.likePost(post);
  await user_database.updatePost(post);
  res.send("ok");
});

//Dislike Post
router.post("/dislike/:userId/:postId", async (req, res) => {
  const { postId, userId } = req.params;
  const user = await user_database.find(userId);
  const post = await user_database.findPostById(postId);
  user.dislikePost(post);
  await user_database.updatePost(post);
  res.send("ok");
});

module.exports = router;
