// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/OpenArticle');
    console.log('Connected to db')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your service has auth enabled
}