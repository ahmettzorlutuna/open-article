const Post = require('./post')
const Comment = require('./comment')
const uuid = require('uuid')


class User{
    constructor(username, posts = [], following = [], followers = [], id = uuid.v4()){
        this.username = username
        this.posts = posts
        this.following = following
        this.followers = followers
        this.id = id
        
    }
    createPost(name,content, comment){
        const post = new Post(name,content,comment)
        this.posts.push(post)
        return post
    }
    follow(user){
        this.following.push(user.username)
        user.followers.push(this.username)
    }
    makeComment(user,postName,name,content){
        const commentt = new Comment(name,content)
        const post = user.posts.forEach(o => o.name == postName)
    }
    static create({username,posts,following,followers,id}){
        return new User(username,posts,following,followers,id)
    }
}

module.exports = User