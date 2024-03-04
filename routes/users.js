const express = require("express");
const router = express.Router();
const { userService, postService, commentService } = require("../services");
const passport = require("passport");

//Users
router.get("/", passport.authenticate('jwt', {session: false}),async (req, res) => {
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

//Follow
router.post("/follow/:userId", async (req, res) => {
  const { userId } = req.params;
  const { userId2 } = req.body;
  userService.followUser(userId, userId2);
  res.send("Ok");
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



module.exports = router;
