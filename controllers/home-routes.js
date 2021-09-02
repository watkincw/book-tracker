const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage', {
        isbn: 1234567890,
        title: 'Handlebars Docs',
        author: 'Someone Special',
    })
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('login');

});

module.exports = router;