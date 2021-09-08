const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, User, Feeling } = require('../models');
const withAuth = require('../utils/auth');
//localhost:3001/dashboard subaddress


router.get ('/', withAuth, (req, res) => {
  Book.findAll({
    include: {
      model: Feeling,
      where: {
        type: 'like',
        user_id: req.session.user_id
      }
    }
  })
  Book.findAll({
    include: {
      model: Feeling,
      where: {
        type: 'dislike',
        user_id: req.session.user_id
      }
    }
  })
  Book.findAll({
    include: {
      model: Feeling,
      where: {
        type: 'wish',
        user_id: req.session.user_id
      }
    }
  })
    .then (dbBookData => {
        // serialize data before passing to template
        const books = dbBookData.map(book => book.get({ plain: true }));
        // console.log(dbBookData);
        res.render('dashboard', { books, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;