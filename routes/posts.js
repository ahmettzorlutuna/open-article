const express = require("express");
const router = express.Router();

//New post
router.post("/:userId", async (req, res) => {
  const { name, content } = req.body;
  const { userId } = req.params;

  await postService.createPost(userId, name, content);
  res.send("ok");
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

//Post Detail
router.get("/article/:postId", async (req, res) => {
  const { postId } = req.params;
  const post = await postService.findByObjectId(postId);
  res.render("post", { post });
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
