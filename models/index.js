// import all models
const User = require('./User');
const Book = require('./Book');

//create associations
User.hasMany(Book, {
    foreignKey: 'user_id'
});

Book.belongsTo(User, {
    foreignKey: 'user_id'
});

const User = require('./User');
const Book = require('./Book');

module.exports = { User, Book };