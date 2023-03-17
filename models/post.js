const uuid = require('uuid')

class Post{
    constructor(name,content,comment = [], likes = 0, dislikes = 0 , id = uuid.v4()){
        this.name = name
        this.content = content
        this.comment = comment
        this.likes = likes
        this.dislikes = dislikes
        this.postId = id
    }
}

module.exports = Post