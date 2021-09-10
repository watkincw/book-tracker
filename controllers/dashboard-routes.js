const router = require('express').Router();
const { Book, Feeling } = require('../models');
const withAuth = require('../utils/auth');

//localhost:3001/dashboard routes
router.post('/', withAuth, (req, res) => {
	Book.create({
		isbn: req.body.isbn,
		title: req.body.title,
		author: req.body.author,
	})
	Feeling.create({
		// id: Unique id automatically generated using AUTO_INCREMENT
		type: req.body.feeling,
		user_id: req.session.user_id,
		book_isbn: req.body.isbn, 
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