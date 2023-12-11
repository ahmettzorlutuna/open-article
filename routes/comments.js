const express = require("express");
const router = express.Router();
const {commentService} = require('../services')


//All comments
router.get("/", async(req,res) => {
    const comments = await commentService.load()
    res.render('comments', {comments})
  })

router.get('/search', async(req,res)=> {
    const commentName = req.query.commentName
    const user = req.query.user

    const query = {}

    if(commentName) query.commentName = commentName
    if(user) query.user = user

    const comments = await commentService.query(query)
    if(!comments) return res.status(404).send('Cannot find comments')
    res.render('comments', {comments})
})

module.exports = router