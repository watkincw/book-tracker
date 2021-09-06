const { Book } = require('../models');

const bookData = [
  {
    title: 'Pride and Prejudice',
    isbn: '0143105426',
    author: 'Jane Austen'
  },
  {
    title: 'Year One: A Penny Arcade Retrospective',
    isbn:  '9781931195126',
    author: 'Michael Krahulik, Jerry Holkins'
  },
  {
    title: 'Where Is Babys Belly Button? A Lift-the-Flap Book',
    isbn: '9780689835605',
    author: 'Karen Katz'
  },
  {
    title: 'Strange Maps: An Atlas of Cartographic Curiosities',
    isbn: '9780142005255',
    author: 'Frank Jacobs'
  },
  {
    title: 'Memories of Midnight',
    isbn: '9780688084882',
    author: 'Sidney Sheldon'
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
