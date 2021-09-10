const router = require('express').Router();
const { Book, Feeling } = require('../../models');

// GET all books
// SELECT * FROM Book
router.get('/', (req, res) => {
	Book.findAll()
	.then(dbBookData => res.json(dbBookData))
	.catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

// GET a book
// SELECT * FROM Book WHERE isbn = ?
router.get('/:id', (req, res) => {
	Book.findOne({
		where: {
			isbn: req.params.id
		}
	})
	.then(dbBookData => {
		if (!dbBookData) {
			res.status(404).json({ message: 'No book found with this id' });
			return;
		}
		res.json(dbBookData);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

// GET liked books for a given user
/* SELECT * FROM Book
	 INNER JOIN Feeling ON Book.isbn = Feeling.book_id
	 WHERE Feeling.type = 'like'
	 AND Feeling.user_id = ? */
router.get('/users/:id/likes', (req, res) => {
	Book.findAll({
		include: [{
			model: Feeling,
			where: {
				type: 'like',
				user_id: req.params.id
			}
		}]
	})
	.then(dbBookData => {
		if (!dbBookData) {
			res.status(404).json({ message: 'No user found with this id' });
			return;
		}
		res.json(dbBookData);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

// GET disliked books for a given user
/* SELECT * FROM Book
	 INNER JOIN Feeling ON Book.isbn = Feeling.book_id
	 WHERE Feeling.type = 'dislike'
	 AND Feeling.user_id = ? */
router.get('/users/:id/dislikes', (req, res) => {
	Book.findAll({
		include: [{
			model: Feeling,
			where: {
				type: 'dislike',
				user_id: req.params.id
			}
		}]
	})
	.then(dbBookData => {
		if (!dbBookData) {
			res.status(404).json({ message: 'No user found with this id' });
			return;
		}
		res.json(dbBookData);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

// GET wish list of books for a given user
/* SELECT * FROM Book
	 INNER JOIN Feeling ON Book.isbn = Feeling.book_id
	 WHERE Feeling.type = 'wish'
	 AND Feeling.user_id = ? */
router.get('/users/:id/wishes', (req, res) => {
	Book.findAll({
		include: [{
			model: Feeling,
			where: {
				type: 'wish',
				user_id: req.params.id
			}
		}]
	})
	.then(dbBookData => {
		if (!dbBookData) {
			res.status(404).json({ message: 'No user found with this id' });
			return;
		}
		res.json(dbBookData);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

module.exports = router;