const uuid = require('uuid')

class Comment{
    constructor(commentName, commentContent, userName, id=uuid.v4()){
        this.userName = userName
        this.commentName = commentName
        this.commentContent = commentContent
        this.commentId = id
    }
}

module.exports = Comment