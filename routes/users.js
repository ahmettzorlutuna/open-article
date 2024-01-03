const express = require("express");
const router = express.Router();
const { userService, postService, commentService } = require("../services");

//Users
router.get("/", async (req, res) => {
  const users = await userService.load();
  res.send(users);
  // res.render("users", { users });
});

//User Detail
router.get("/:userId", async (req, res) => {
  const user = await userService.find(req.params.userId);
  if (!user) return res.status(404).send("Cannot get user");
  //if(!user.followers) return res.status(404).send('Cannot find followings or followers')
  // res.render("user", { user });
  res.send(user);
});

//Delete Post
router.delete("/posts/:postId", async (req, res) => {
  const { postId } = req.params.postId;
  const post = await postService.removePostById(postId);
  return post;
});

//Delete User
router.delete("/:userId", async (req, res) => {
  const user = userService.removeById(req.params.userId);
  res.send(user);
});

//New User
router.post("/", async (req, res) => {
  try {
    const existingUser = await userService.checkUserAndInsert('username',req.body.username,req.body)
    if(existingUser){
      res.send("Inserted successfuly.")
    }else{
      res.send("User exist.")
    }
  } catch (error) {
    console.error(error);
    res.send("Internal server error!")
  }
});

//New post
router.post("/:userId", async (req, res) => {
  const { name, content } = req.body;
  const { userId } = req.params;

  await postService.createPost(userId, name, content);
  res.send("ok");
});

//Follow
router.post("/follow/:userId", async (req, res) => {
  const { userId } = req.params;
  const { userId2 } = req.body;
  userService.followUser(userId, userId2);
  res.send("Ok");
});

//Post Detail
router.get("/article/:postId", async (req, res) => {
  const { postId } = req.params;
  const post = await postService.findByObjectId(postId);
  res.render("post", { post });
});

//Comment Post
router.post("/comment/:userId", async (req, res) => {
  const { userId } = req.params;
  const { postId, commentName, commentContent } = req.body;

  const comment = await commentService.makeComment(
    postId,
    userId,
    commentName,
    commentContent
  );
  // const result = userService.updatePostById(post._id, post)
  console.log("ok");
  res.send(comment);
});

//Like Post
router.post("/like/:userId", async (req, res) => {
  const { userId } = req.params;
  const { postId } = req.body;

  const post = postService.likePost(userId, postId);
  res.send(post);
});

//Dislike Post
router.post("/dislike/:userId", async (req, res) => {
  const { userId } = req.params;
  const { postId } = req.body;

  const post = postService.dislikePost(userId, postId);
  res.send(post);
});

module.exports = router;
