const { america } = require('colors');

function printAllPosts(user){
    function printPost(post){
        console.log(`${user.username}'s post is ${post.content}`)
    }
    if(user.posts.length == 0){
        console.log(`${user.username}'s is no posts yet`)
    }
    user.posts.forEach(printPost)
}




module.exports = printAllPosts