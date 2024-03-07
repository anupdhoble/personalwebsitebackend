import mongoose from 'mongoose';
const {Schema}=mongoose;

const commentSchema = new Schema({
    uid:{
        type: String,
        required: true
    },
    commenter:{
        type: String,
        required: true
    },
    blogId:{
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