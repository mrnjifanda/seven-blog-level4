const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    title: String,
    content: {
        type: String,
        default: 'Message',
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created: Date
});

const Article = mongoose.model('Article', ArticleSchema);
Article.createCollection();

module.exports = Article;
