const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    ipaddress:{
        type: String,
        required: false
    },
    uid:{
        type: String,
        required: true
    },
    
    commenter:{
        type: String,
        required: true
    },
    blogid:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
})

const Comments = mongoose.model('Comments', commentSchema);
module.exports = Comments;