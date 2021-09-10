const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, User, Feeling } = require('../models');
const withAuth = require('../utils/auth');
//localhost:3001/dashboard subaddress

router.post('/', withAuth, (req, res) => {
	Book.create({
		isbn: req.body.isbn,
		title: req.body.title,
		author: req.body.author,
	})
	Feeling.create({
		// id: Automatically created using autoIncrement
		type: req.body.feeling,
		user_id: req.session.user_id,
		book_isbn: req.body.isbn, 
		review: req.body.review
	})
		.then(dbBookData => res.json(dbBookData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get('/', withAuth, (req, res) => {
	Book.findAll({
		include: {
			model: Feeling,
			where: {
				user_id: req.session.user_id
			}
		}
	})
		.then(dbBookData => {
			// serialize data before passing to template
			const books = dbBookData.map(book => book.get({ plain: true }));
			// console.log(dbBookData);
			const likes = books.filter(book => book.feelings[0].type === 'like');
			const dislikes = books.filter(book => book.feelings[0].type === 'dislike');
			const wishes = books.filter(book => book.feelings[0].type === 'wish');
			res.render('dashboard', { books, likes, dislikes, wishes, loggedIn: true });
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;