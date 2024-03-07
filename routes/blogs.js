const express = require('express');
const router = express.Router();
const Blogs = require('../models/Blogs');

const GET_ALL_BLOGS=process.env.GET_ALL_BLOGS;
// Get all blogs
router.get(GET_ALL_BLOGS, async (req, res) => {
    try {
        const blogs = await Blogs.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a blog
const GET_A_BLOG=process.env.GET_A_BLOG;
router.get(GET_A_BLOG, async (req, res) => {
    try {
        const blog = await Blogs.findById(req.params.id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new blog
const CREATE_BLOG=process.env.CREATE_BLOG;
router.post(CREATE_BLOG, async (req, res) => {
    try {
        const { uid, title, content, author ,imgUrl,imgRefToFirebase} = req.body;
        if (!uid || !title || !content || !author) {
            return res.status(400).json({ msg: "Not all fields have been entered." });
        }
        const newBlog = new Blogs({ uid, title, content, author ,imgUrl,imgRefToFirebase});
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
