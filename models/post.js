const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5
  },
  content: {
    type: String,
    required: true,
    minLength: 10
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
      autopopulate: {maxDepth: 2},
    },
  ],
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 }
});

PostSchema.plugin(require('mongoose-autopopulate'));

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
