// import models
const User = require('./User');
const Book = require('./Book');
const Feeling = require('./Feeling'); // through table

// create associations

/* In HasMany associations, the foreign key always exists on the target model (Book).
Book is not going to have a foreign key of user_id, as a Book can be associated with many Users. */
// User.hasMany(Book, {
//   foreignKey: 'user_id'
// });

/* BelongsTo is used in 1:1 relations where the foreign key exists on the source model (Book).
Book is not going to have a foreign key of user_id, as a Book can be associated with many Users. */
// Book.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

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