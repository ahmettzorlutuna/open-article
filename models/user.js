const uuid = require('uuid')
const Post = require('./post')
const Comment = require('./comment')

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
    
    makeCommentById(post, name, content){
        const comment = new Comment(name, content, this.username)
        post.comment.push(comment)
    }
    likePost(post){
       post.likes += 1 
    }
    dislikePost(post){
        post.dislikes += 1 
     }
    static create({username,posts,following,followers,messages,userId}){
        return new User(username,posts,following,followers,messages,userId)
    }
}

module.exports = User