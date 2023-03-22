const mongoose = require('mongoose');
const User = require('./models/User');
const Article = require('./models/Article');

//  URL => https://mongoosejs.com/
mongoose.connect('mongodb://127.0.0.1:27017/mongooseTest', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: fasle
});

const article = Article.find({ _id: ' 000000' });
if (article) {

    const authorName = article.author.username
}
