const express = require('express')
const router = express.Router()

//Index
router.get('/', async(req, res) => {
    res.render('index')
  })

module.exports = router