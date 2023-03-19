const express = require('express')
const bodyParser = require('body-parser')
const User = require('./models/user')
const UsersRouter = require('./routes/users')
const IndexRouter = require('./routes/index')

const app = express()
const port = 3000


app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(express.static(__dirname + '/css')); //İnclude css files
app.use('/users', UsersRouter)
app.use('/', IndexRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})