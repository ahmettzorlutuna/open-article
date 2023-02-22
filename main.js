const User = require('./models/user')
const userDatabase= require('./database');
const printAllPosts = require('./lib/print-post-history');

const ahmet = new User("Ahmet")

ahmet.createPost("Ahmet'in Makalesi","Deneme Makalesi")
ahmet.createPost("Ahmet'in yeni makalesi","Deneme makalesi yeni")


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