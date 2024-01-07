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
      ref: 'Comment'
    },
  ],
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  createdDate: Date
});

PostSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("Post", PostSchema);
