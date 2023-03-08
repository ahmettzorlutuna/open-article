const Post = require('./post')
const Comment = require('./comment')
const uuid = require('uuid')

class User{
    constructor(username, posts = [], following = [], followers = [], messages = [], userId = uuid.v4()){
        this.username = username
        this.posts = posts
        this.following = following
        this.followers = followers
        this.userId = userId
        this.messages = messages
    }
    createPost(name,content, comment){
        const post = new Post(name,content,comment)
        this.posts.push(post)
        return post
    }
    follow(user){
        this.following.push(user)
        user.followers.push(this)
    }
    updateArticleByName(postName,name,content,comment){
        const index = this.posts.findIndex(o => o.name == postName)
        this.posts[index].name = name
        this.posts[index].content = content
    }
    makeCommentByName(user,postName,name,content){ //Make comment by name yorumu kim yaptı isim bilgisi (yapıldı)
        const commentt = new Comment(name,content,this.username)
        for (let i = 0; i < user.posts.length; i++) {
            const element = user.posts[i];
            if(element.name == postName){
                element.comment.push(commentt)
            }
        }
    }
    updateComment(user,postName,commentName,name,content){
        const post = user.posts.findIndex(o => o.name == postName)
        const comments = user.posts[post].comment
        const comment = comments.findIndex(o => o.commentName == commentName)
        comments[comment].commentName = name
        comments[comment].commentContent = content
    }
    likePost(post){ 
    }
    static create({username,posts,following,followers,messages,userId}){
        return new User(username,posts,following,followers,messages,userId)
    }
}

module.exports = User