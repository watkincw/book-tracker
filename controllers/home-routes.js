const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        isbn: 1234567890,
        title: 'Handlebars Docs',
        author: 'Someone Special',
    })
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;