const mongoose = require("mongoose");
const moment = require('moment');

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5,
  },
  content: {
    type: String,
    required: true,
    minLength: 10,
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      autopopulate: true,
    },
  ],
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  date: { type: Date, default: Date.now},
});

PostSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Post", PostSchema);
