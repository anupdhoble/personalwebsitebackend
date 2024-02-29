const express = require('express');
const router = express.Router();
const Blogs = require('../models/Blogs');

// Get all blogs
router.get('/getAll', async (req, res) => {
    try {
        const blogs = await Blogs.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new blog
const GET_ALL_BLOGS=process.env.GET_ALL_BLOGS;
router.post(GET_ALL_BLOGS, async (req, res) => {
    try {
        const { uid, title, content, author } = req.body;
        if (!uid || !title || !content || !author) {
            return res.status(400).json({ msg: "Not all fields have been entered." });
        }
        const newBlog = new Blogs({ uid, title, content, author });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Delete a blog
const DELETE_BLOG=process.env.DELETE_BLOG;
router.delete(DELETE_BLOG, async (req, res) => {
    try {
        const deletedBlog = await Blogs.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
//Update a blog
const UPDATE_BLOG=process.env.UPDATE_BLOG;
router.put(UPDATE_BLOG, async (req, res) => {
    try {
        const { title, content } = req.body;
        if ( !title || !content ) {
            return res.status(400).json({ msg: "Not all fields have been entered." });
        }
        const updatedBlog = await Blogs.findByIdAndUpdate(req.params.id, { title, content });
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
