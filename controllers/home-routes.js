const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, Feeling, User } = require('../models');
// are current subaddress //localhost:3001/

//only res.render routers here!!!!


router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage', {
        isbn: '1234567890',
        title: 'Handlebars Docs',
        author: 'Someone Special',
    })
});
//localhost:3001/login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    res.render('login');

});

module.exports = router;