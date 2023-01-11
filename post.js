const uuid = require('uuid')

class Post{
    constructor(content,comment,id = uuid.v4()){
        this.content = content
        this.comment = comment
        this.id = id
    }
}

module.exports = Post