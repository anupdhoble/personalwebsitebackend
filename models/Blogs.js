const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    imgUrl:{
        type: String,
        required:false
    
    },
    imgRefToFirebase:{
        type: String,
        required:false
    }
});

const Blogs = mongoose.model('Blogs', blogSchema);

module.exports = Blogs;
