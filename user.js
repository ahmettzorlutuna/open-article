const Post = require('./post')
const uuid = require('uuid')
const { userDatabase } = require('./database')

class User{
    constructor(username, posts = [], following = [], followers = [], id = uuid.v4()){
        this.username = username
        this.posts = posts
        this.following = following
        this.followers = followers
        this.id = id
        
    }
    createPost(content, comment){
        const post = new Post(content,comment)
        this.posts.push(post)
        return post
    }
    static create({username,posts,following,followers,id}){
        return new User(username,posts,following,followers,id)
    }
}

module.exports = User