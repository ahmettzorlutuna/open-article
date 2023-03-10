const express = require('express')
const user_database = require('./database')
const bodyParser = require('body-parser')
const User = require('./models/user')

const app = express()
const port = 3000


app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(express.static(__dirname + '/css')); //İnclude css files

//Index
app.get('/', async(req, res) => {
  res.render('index')
})

//Users
app.get('/users', async(req, res) => {
    const users = await user_database.load()
    res.render('users', {users})
  })

//Detail
app.get('/users/:id', async(req,res) => {
    const user = await user_database.find(req.params.id)
    if(!user) return res.status(404).send('Cannot get user')
    //if(!user.followers) return res.status(404).send('Cannot find followings or followers')
    res.render('user', {user})
})

//Delete User
app.delete('/users/:userId', async(req,res) => {
  const user = user_database.removeBy('id', req.params.userId)
  res.send(user)
})

//New User
app.post('/users/', async(req,res) => {
  // const username = req.body.username
  // const user = new User(username)
  // await user_database.insert(user)

  const newUser = user_database.insert(req.body)
  res.send(newUser)
})

//New booking
app.post('/users/:userId', async(req,res) => {
  const {name, content} = req.body
  const {userId} = req.params
  const user = await user_database.find(userId)
  const newPost = user.createPost(name,content)
  await user_database.update(user)
  res.send(newPost)
})

//Follow
app.post('/user/:userId/:follow', async(req,res) => {
  const {userId} = req.params
  const {follow} = req.params
  const user = await user_database.find(userId)
  const user2 = await user_database.find(follow)
  user.follow(user2)
  user2.follow(user)
  await user_database.update(user)
  await user_database.update(user2)
  res.send('Ok')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})