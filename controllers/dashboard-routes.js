const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, User, Feeling } = require('../models');
const withAuth = require('../utils/auth');
//localhost:3001/api/dashboard subaddress


router.get ('/', withAuth, (req, res) => {
    Book.findAll({
        where: {
            // use the ID from the session
            user_id: req.session.user_id
        },
        attributes: [
            'title',
            'isbn',
            'author'
        ],
        include: [
            {
                model: Feeling,
                attributes: ['id', 'type', 'user_id', 'book_isbn'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then (dbBookData => {
        // serialize data before passing to template
        const books = dbBookData.map(book => book.get({ plain: true }));
        res.render('dashboard', { books, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;