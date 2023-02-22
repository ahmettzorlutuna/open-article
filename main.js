const User = require('./models/user')
const userDatabase= require('./database');
const printAllPosts = require('./lib/print-post-history');

const ahmet = new User("Ahmet")
//const mehmet = new User("Mehmet")

// userDatabase.save([ahmet])

ahmet.createPost("Ahmet'in Makalesi","Deneme Makalesi")
ahmet.createPost("Ahmet'in yeni makalesi","Deneme makalesi yeni")
//mehmet.createPost("Mehmet'in makalesi","Deneme makalesi 2")

//const comment = mehmet.makeCommentByName(ahmet,"Ahmet'in yeni makalesi","Deneme Yorumu","güzel")
//const comment2 = mehmet.makeCommentByName(ahmet,"Ahmet'in yeni makalesi","Deneme Yorumu 2","bu makaleyi beğendim")

//ahmet.updateArticleByName("Ahmet'in yeni makalesi","Ahmet'in Makalesi güncellenmiş2 ","Ahmet'in yeni güncellenmiş makalesi2")

// mehmet.updateComment(ahmet,"Ahmet'in Makalesi güncellenmiş2 ","Deneme Yorumu 2","Deneme yorumu 2 güncellenmiş yeni ad","Deneme yorumu 2 güncel içerikk")
// userDatabase.update(ahmet)

// const data = userDatabase.load()
// console.log(data)
// data.forEach(printAllPosts)

// ahmet.follow(mehmet)
// mehmet.follow(ahmet)


// userDatabase.update({ahmet,mehmet})

async function main(){
    try {
        await userDatabase.save([ahmet])
        const mehmet = new User("Mehmet")
        mehmet.createPost("Mehmet'in makalesi","Deneme makalesi 2")
        mehmet.createPost("Mehmet'in makalesi yeni","Deneme makalesi 2 yeni")
        mehmet.makeCommentByName(ahmet,"Ahmet'in Makalesi","Deneme Yorumu","güzel")
        await userDatabase.insert(mehmet)
        const data = await userDatabase.load()
        userDatabase.update(ahmet)
        console.log(data)
    } catch (error) {
        return console.log(error)
    }
}
main()