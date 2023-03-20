const mongoose = require('mongoose');
const { Schema } = mongoose;

const ArticleSchema = Schema({
    title: String,
    author: String,
    content: String
});

const Article = mongoose.model('article', ArticleSchema);
Article.createCollection();
module.exports = Article;
