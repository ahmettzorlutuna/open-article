const express = require("express");
const router = express.Router();
const {userService, postService, commentService} = require("../services");
const Post = require("../models/post")


//Users
router.get("/", async (req, res) => {
  const users = await userService.load();
  res.render("users", { users });
});

//User Detail
router.get("/:id", async (req, res) => {
  const user = await userService.find(req.params.id);
  if (!user) return res.status(404).send("Cannot get user");
  //if(!user.followers) return res.status(404).send('Cannot find followings or followers')
  res.render("user", { user });
});

//Delete Post
router.delete("/posts/:postId", async(req,res) => {
  const {postId} = req.params.postId
  const post = await postService.removePostById(postId)
  return post
})

//Delete User
router.delete("/:userId", async (req, res) => {
  const user = userService.removeById(req.params.userId);
  res.send(user);
});

//New User
router.post("/", async (req, res) => {
  await userService.insert(req.body);
  res.send("Ok");
});

//New post
router.post("/:userId", async (req, res) => {
  const { name, content } = req.body;
  const { userId } = req.params;

  const newPost = await postService.createPost(userId, name, content);
  res.send(newPost);
});

//Follow
router.post("/follow/:userId", async (req, res) => {
  const { userId } = req.params;
  const { userId2 } = req.body;
  userService.followUser(userId,userId2);
  res.send("Ok");
});

//Post Detail
router.get("/article/:postId", async (req, res) => {
  const { postId } = req.params;
  const post = await postService.findPostById(postId);
  res.render("post", { post });
});

//Comment Post
router.post("/comment/:userId", async (req, res) => {
  const { userId } = req.params;
  const {postId, commentName, commentContent} = req.body
  
  const comment = await commentService.makeComment(postId, userId, commentName, commentContent);
  // const result = userService.updatePostById(post._id, post)
  console.log("ok")
  res.send(comment);
});

//Like Post
router.post("/like/:userId/:postId", async (req, res) => {
  const { postId, userId } = req.params;
  const user = await userService.find(userId);
  const post = await userService.findPostById(postId);
  user.likePost(post);
  await userService.updatePostById(post._id, post);
  res.send("ok");
});

//Dislike Post
router.post("/dislike/:userId/:postId", async (req, res) => {
  const { postId, userId } = req.params;
  const user = await userService.find(userId);
  const post = await userService.findPostById(postId);
  user.dislikePost(post);
  await userService.updatePostById(post._id, post);
  res.send("ok");
});

module.exports = router;
