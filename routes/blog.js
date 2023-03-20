const express = require('express');
const router = express.Router();
const fs = require('fs');
const Article = require('../models/Article')

// Read information: find, findOne, findBy, findById
// Create un new instance and do save(), const post = new Post(object); post.save()
// Update: update(), findAndUpdate()
// Delete: findOneAndDelete, findAndDelete

const blogMidddleware = require('../middlewares/blog.middleware');
const { find } = require('../models/Article');

router.get('/update/:id', async (req, res) => {

    const id = req.params.id;
    const article = await Article.findById(id);
    console.log(article);
    if (article) {

        return res.render('blog/update', {
            title: 'Update article: ' + article.title,
            article
        });
    }

    req.redirect('/blog');
});

router.post('/update/:id', async (req, res) => {

    const id = req.params.id;
    const update = await Article.findOneAndUpdate({ _id: id }, req.body);
    res.redirect('/blog');
});

router.get('/delete/:id', async (req, res) => {

    const deleteArticle = await Article.findOneAndDelete({ _id: req.params.id });
    res.redirect('/blog');
});

router.get('/', blogMidddleware, async (req, res) => {

    const articles = await Article.find().sort({ _id: 'desc' });
    res.render('blog/index', { title: 'All cats', articles });
    console.log(articles);

    // const getData = await fetch('https://catfact.ninja/breeds');
    // if (getData.status === 200) {

    //     const data = await getData.json();
    //     const cats = data.data;
    //     console.log(data);
    //     res.render('blog/index', { title: 'All cats', cats });
    // }
});

router.get('/add', (req, res) => {

    if (req.query) {

        const query = req.query;
        const email = query.email;
        const password = query.password;

        console.log('Email: ' + email);
        console.log('Password: ' + password);
    }
    return res.render('blog/add', {
        title: 'Add new article'
    });
});

router.get('/:id', async (req, res) => {

    const id = req.params.id;
    const getData = await fetch('https://catfact.ninja/breeds');
    if (getData.status === 200) {

        const data = await getData.json();
        const cats = data.data;
        const cat = cats[id] ?? null;
        if (cat) {

            res.render('blog/single', { title: cat.breed, cat });
        } else {

            res.render('error', {
                message: 'Cat not found',
                error: {
                    status: 404,
                    stack: null
                }
            });
        }
    }
});

router.post('/add', async (req, res) => {

    const body = req.body;
    if (body) {

        const article = new Article({
            title: body.title,
            author: body.author,
            content: body.content
        });

        const save = await article.save();
        if (!save) {
            console.log('Save Error');
        }
    }

    res.redirect('/blog');
});

module.exports = router;
