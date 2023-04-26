const express = require('express')
const bodyParser = require('body-parser')
const UsersRouter = require('./routes/users')
const IndexRouter = require('./routes/index')
const CommentRouter = require('./routes/comments')
require('./mongo-connection')

const app = express()
const port = 3000


app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(express.static(__dirname + '/css')); //İnclude css files
app.use('/', IndexRouter)
app.use('/users', UsersRouter)
app.use('/comments', CommentRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})