const User = require('./models/user')
const userDatabase= require('./database');
const printAllPosts = require('./lib/print-post-history');

const ahmet = new User("Ahmet")
const mehmet = new User("Mehmet")
const selami = new User("Selami")

// ahmet.createPost("Ahmet'in Makalesi","Deneme Makalesi")
// ahmet.createPost("Ahmet'in yeni makalesi","Deneme makalesi yeni")
// mehmet.createPost("Mehmet'in yeni makalesi","Mehmet makalesi yeni")



async function main(){
    try {
        // await userDatabase.save([ahmet, mehmet, selami])
        const data = await userDatabase.load()
        console.log(data[0])
    } catch (error) {
        return console.log(error)
    }
}
main()