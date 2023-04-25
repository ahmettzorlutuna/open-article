const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
    commentName: String,
    commentContent: String,
    
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
        