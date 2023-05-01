const colors = require('colors');

function printAllPosts(user){
    function printPost(post){
        console.log(`${colors.yellow(user.username)}'s post is ${colors.yellow(post.content)}`)
    }
    if(user.posts.length == 0){
        console.log(`${colors.yellow(user.username)}'s is no posts yet`)
    }
    user.posts.forEach(printPost)
}




module.exports = printAllPosts