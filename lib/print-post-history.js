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