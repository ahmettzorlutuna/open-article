const uuid = require('uuid')

class Comment{
    constructor(name,commentContent, id=uuid.v4()){
        this.name = name
        this.commentContent = commentContent
        this.id = id
    }
}

module.exports = Comment