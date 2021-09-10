const router = require('express').Router();
const userRoutes = require('./user-routes');
const bookRoutes = require('./book-routes');


//localhost:3001/api routes

//localhost:3001/api/users
router.use('/users', userRoutes);
//localhost:3001/api/books
router.use('/books', bookRoutes);

module.exports = router;