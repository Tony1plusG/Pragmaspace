let express = require('express');
let cors = require('cors');
let app = express();
let bodyParser = require('body-parser');
const mongoose = require('mongoose');

// env configs
let port = process.env.PORT || 4000;


//app configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// DataBase configuration
mongoose
    .connect(
        'mongodb://localhost:27017/books',
        {useNewUrlParser: true}
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
const Item = require('./mongoDB');
const Comment = require("./CommentModel");


// books api
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:4200';

app
    .use(cors({
        origin: corsOrigin
    }))
    .get('/api/books', async (req, res) => {
        try {
            let result = await Item.find().exec();
            res.json(result);
        }catch (error) {
            res.status(500).send(error);
        }
    })
    .get('/api/books/:bookId', async (req, res) => {
        try {
            let book = await Item.findById(req.params.bookId).exec();
            res.json(book);
        }catch (error) {
            res.status(500).send(error);
        }
    })
    .get(`/api/comments/:commentId`, async (req, res) => {
        try {
            let comment = await Comment.find({commentID: req.params.commentId});
            res.json(comment);
        }catch (error) {
            res.status(500).send(error);
        }
    })
    .get('/api/comment/:commentId', async (req, res) => {
        try {
            let comment = await Comment.findById(req.params.commentId).exec();
            res.json(comment);
        }catch (error) {
            res.status(500).send(error);
        }
    })
    .post(`/api/books`, async (req, res) => {
        try {
            let book = new Item(req.body);
            let result = await book.save();
            res.json(result);
        }catch (error) {
            res.status(500).send(error);
        }
    })
    .post('/api/comments', async  (req, res) => {
        try {
            let comment = new Comment(req.body);
            let result = await  comment.save();
            res.json(result);
        }catch (error) {
            res.status(500).send(error);
        }
    })
    .put('/api/books/:bookId', async (req, res) => {
        try {
            let book = await Item.findById(req.params.bookId);
            book.set(req.body);
            let saveBookChanges = await book.save();
            let result = await Item.find().exec();
            res.json(result);
        }catch (error) {
            res.status(500).send(error);
        }
    })
    .put('/api/comments/:commentId', async (req, res) => {
        try {
            let comment = await Comment.findById(req.params.commentId);
            comment.set(req.body);
            let saveCommentChanges = await comment.save();
            let result = await Comment.find().exec();
            res.json(result);
        }catch (error) {
            res.status(500).send(error);
        }
    })
    .delete(`/api/comments/:commentId`, async (req, res) => {
        try {
            let deletedComment = await  Comment.deleteOne({_id: req.params.commentId}).exec();
            let result = await Comment.find().exec();
            res.json(result);
        }catch (error) {
            res.status(500).send(error);
        }
    })
    .delete('/api/books/:bookId', async (req, res) => {
        try {
            let deletedItem = await Item.deleteOne({ _id: req.params.bookId }).exec();
            let result = await Item.find().exec();
            res.json(result);
        }catch (error) {
            res.status(500).send(error);
        }
    });

app.listen(port, function () {
    console.log('Node.js listening on port ' + port)
});
