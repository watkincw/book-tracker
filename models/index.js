// import all models
const User = require('./User');
const Book = require('./Book');
/* The models Likes, Dislikes, and WishList have identical attributes: id, user_id, and book_id.
This code could be refactored to create a parent class of these models. */
const LikedBook = require('./LikedBook');
const DislikedBook = require('./DislikedBook');
const WishListBook = require('./WishListBook');

// create associations
User.hasMany(Book, {
    foreignKey: 'user_id'
});

Book.belongsTo(User, {
    foreignKey: 'user_id'
});

// LikedBook

// DislikedBook

// WishListBook

module.exports = { User, Book, LikedBook, DislikedBook, WishListBook };