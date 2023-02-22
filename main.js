const User = require('./user')
const {userDatabase, waiterDatabase}  = require('./database');
const { findBy, findByName } = require('./database/user_database');
const { america } = require('colors');

function printAllPosts(user){
    if(user.posts.length == 0){
        console.log(`${user.username}'s is no posts yet`)
    }
    user.posts.forEach(printPost)
}

function printPost(post){
    console.log(`${post.content} and comment is ${post.comment}`)
}


const ahmet = new User("Ahmett")
const mehmet = new User("Mehmet")

ahmet.createPost("Deneme Makalesi","Çok güzel")
mehmet.createPost("Deneme makalesi 2","Berbat")

ahmet.follow(mehmet)
mehmet.follow(ahmet)

userDatabase.update({ahmet,mehmet})