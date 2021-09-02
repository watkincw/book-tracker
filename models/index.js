// import models
const User = require('./User');
const Book = require('./Book');
const Feeling = require('./Feeling'); // through table

// create associations
User.hasMany(Book, {
  foreignKey: 'user_id'
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Book, {
  through: Feeling,
  as: 'feelings',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Book.belongsToMany(User, {
  through: Feeling,
  as: 'feelings',
  foreignKey: 'book_id',
  onDelete: 'SET NULL'
});

Feeling.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Feeling.belongsTo(Book, {
  foreignKey: 'book_id',
  onDelete: 'SET NULL'
});

User.hasMany(Feeling, {
  foreignKey: 'user_id'
});

Book.hasMany(Feeling, {
  foreignKey: 'book_id'
});

module.exports = { User, Book, Feeling };