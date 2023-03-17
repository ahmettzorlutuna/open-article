const uuid = require('uuid')

class Comment{
    constructor(commentName, commentContent, username, id=uuid.v4()){
        this.username = username
        this.commentName = commentName
        this.commentContent = commentContent
        this.commentId = id
    }
}

module.exports = Comment