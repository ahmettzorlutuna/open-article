const uuid = require('uuid')

class Comment{
    constructor(name, commentContent, userName, id=uuid.v4()){
        this.userName = userName
        this.commentName = name
        this.commentContent = commentContent
        this.commentId = id
    }
}

module.exports = Comment