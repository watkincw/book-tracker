// import models
const User = require('./User');
const Book = require('./Book');
const Feeling = require('./Feeling'); // through table

// create associations
User.belongsToMany(Book, {
  through: Feeling,
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Book.belongsToMany(User, {
  through: Feeling,
  foreignKey: 'book_isbn',
  onDelete: 'SET NULL'
});

Feeling.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Feeling.belongsTo(Book, {
  foreignKey: 'book_isbn',
  onDelete: 'SET NULL'
});

User.hasMany(Feeling, {
  foreignKey: 'user_id'
});

Book.hasMany(Feeling, {
  foreignKey: 'book_isbn'
});

module.exports = { User, Book, Feeling };