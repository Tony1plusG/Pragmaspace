const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    commentID: {
        type: String,
        required: true
    }
});

module.exports = bookComment = mongoose.model('comment', CommentSchema);
