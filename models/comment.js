const uuid = require('uuid')
const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    commentName: String,
    commentContent: String,
})

module.exports = mongoose.model("Comment",CommentSchema)


// class Comment{
    //     constructor(commentName, commentContent, username, id=uuid.v4()){
        //         this.username = username
        //         this.commentName = commentName
        //         this.commentContent = commentContent
        //         this.commentId = id
        //     }
        // }
        