const express =require('express');
const router = express.Router();
const Comments = require('../models/Comments');


// Create a new comment
router.get('/create', async(req, res) => {
    try{
        const { commenter, blogid, content } = req.body;
        if ( !commenter || !blogid || !content) {
            return res.status(400).json({ msg: "Not all fields have been entered." });
        }
        const newComment = new Comments({ commenter, blogid, content });
        await newComment.save();
        res.status(201).json(newComment);
    }catch{
        res.status(500).json({ error: error.message });
    }
});

//Delete a comment
router.delete('/delete/:id', async(req, res) => {
    try{
        const deletedComment = await Comments.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedComment);
    }catch{
        res.status(500).json({ error: error.message });
    }
});

//Get comments of certain blogs
router.get('/get/:id', async(req, res) => {
    try{
        const comments = await Comments.find({blogid:req.params.id});
        res.status(200).json(comments);
    }catch{
        res.status(500).json({ error: error.message });
    }
});

//get all comments
router.get('/getall', async(req, res) => {
    try{
        const comments = await Comments.find();
        res.status(200).json(comments);
    }catch{
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;