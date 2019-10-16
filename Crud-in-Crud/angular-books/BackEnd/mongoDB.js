const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title : {
        type: String,
        required: false
    },
    author : {
        type: String,
        required: false
    }
});


module.exports = Item = mongoose.model('item', ItemSchema);
