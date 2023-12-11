const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: {maxDepth: 2}
    },
    commentName: {
        type: String,
        required: true,
        minLength: 5
      },
    commentContent: {
        type: String,
        required: true,
        minLength: 10
      },
    
})
CommentSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("Comment",CommentSchema)


// class Comment{
    //     constructor(commentName, commentContent, username, id=uuid.v4()){
        //         this.username = username
        //         this.commentName = commentName
        //         this.commentContent = commentContent
        //         this.commentId = id
        //     }
        // }
        