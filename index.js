const express = require('express')
const user_database = require('./database')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.get('/', async(req, res) => {
  res.render('index')
})

app.get('/users', async(req, res) => {
    const users = await user_database.load()
    res.render('users', {users})
  })

app.get('/users/:id', async(req,res) => {
    const user = await user_database.find(req.params.id)
    res.end(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})