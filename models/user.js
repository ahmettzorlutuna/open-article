const Post = require("./post");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 4,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  hash: String,
  salt: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    autopopulate: true
}],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true
}],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true
}],
  messages: [],
});

UserSchema.methods.createPost = function createPost(data) {
  const post = new Post(data)
  this.posts.push(post);
  return post;
};

UserSchema.methods.follow = function follow(user) {
  const isFollowUser = user.followers.find((o) => o.UserId == this.UserId);
  if (isFollowUser) {
    throw new Error("User exist");
  } else {
    this.following.push(user);
    user.followers.push(this);
  }
};

UserSchema.methods.likePost = function likePost(post){
  post.likes += 1
}

UserSchema.methods.dislikePost = function dislikePost(post){
  post.dislikes += 1
}

UserSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("User", UserSchema);

// class User{
//     constructor(username, posts = [], following = [], followers = [], messages = [], userId = uuid.v4()){
//         this.username = username
//         this.posts = posts
//         this.following = following
//         this.followers = followers
//         this.userId = userId
//         this.messages = messages
//     }
//     createPost(name,content, comment){
//         const post = new Post(name,content,comment)
//         this.posts.push(post)
//         return post
//     }
//     follow(user){
//         const isFollowUser = user.followers.find(o=> o.UserId == this.UserId)
//         if(isFollowUser){
//             throw new Error("User exist")
//         }else{
//             this.following.push(user)
//             user.followers.push(this)
//         }

//     }
//     updateArticleByName(postName,name,content,comment){
//         const index = this.posts.findIndex(o => o.name == postName)
//         this.posts[index].name = name
//         this.posts[index].content = content
//     }

//     makeCommentById(post, name, content){
//         const comment = new Comment(name, content, this.username)
//         post.comment.push(comment)
//     }
//     likePost(post){
//        post.likes += 1
//     }
//     dislikePost(post){
//         post.dislikes += 1
//      }
//     static create({username,posts,following,followers,messages,userId}){
//         return new User(username,posts,following,followers,messages,userId)
//     }
// }

// module.exports = User
