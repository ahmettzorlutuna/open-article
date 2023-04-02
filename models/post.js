const uuid = require("uuid");
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: String,
  content: String,
  comment: [],
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Post", PostSchema);

// class Post{
//     constructor(name,content,comment = [], likes = 0, dislikes = 0 , id = uuid.v4()){
//         this.name = name
//         this.content = content
//         this.comment = comment
//         this.likes = likes
//         this.dislikes = dislikes
//         this.postId = id
//     }
// }

// module.exports = Post
