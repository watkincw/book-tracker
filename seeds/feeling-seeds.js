const { Feeling } = require('../models');

const feelingData = [
  {
    type: 'like',
    user_id: 1,
    book_isbn: '9780688084882',
    review: 'Easy Read.'
  },
  {
    type: 'like',
    user_id: 1,
    book_isbn: '9781931195126',
    review: 'Easy Read.'
  },
  {
    type: 'dislike',
    user_id: 1,
    book_isbn: '0143105426',
    review: 'Boring.'
  },
  {
    type: 'wish',
    user_id: 1,
    book_isbn: '9780689835605',
    review: 'Recommended by So-N-So.'
  },
  {
    type: 'wish',
    user_id: 1,
    book_isbn: '9780142005255',
    review: 'Recommended by So-N-So.'
  },
  {
    type: 'wish',
    user_id: 6,
    book_isbn: '9780688084882',
    review: 'Book Club Pick.'
  },
  {
    type: 'wish',
    user_id: 6,
    book_isbn: '9781931195126',
    review: 'Winter Book Club Pick.'
  },
  {
    type: 'wish',
    user_id: 6,
    book_isbn: '0143105426',
    review: 'Pretty Cover.'
  },
  {
    type: 'wish',
    user_id: 6,
    book_isbn: '9780689835605',
    review: 'Looks Interesting.'
  },
  {
    type: 'wish',
    user_id: 6,
    book_isbn: '9780142005255',
    review: 'Book Club Pick.'
  },
  {
    type: 'like',
    user_id: 2,
    book_isbn: '9780688084882',
    review: 'Great Characters. Great Topic. Quick Read.'
  },
  {
    type: 'like',
    user_id: 2,
    book_isbn: '9781931195126',
    review: 'Loved the format of the chapters.'
  },
  {
    type: 'dislike',
    user_id: 4,
    book_isbn: '0143105426',
    review: 'Hard to follow the plot.'
  },
  {
    type: 'wish',
    user_id: 3,
    book_isbn: '9780142005255',
    review: 'Book Club Pick.'
  },
  {
    type: 'dislike',
    user_id: 5,
    book_isbn: '9781931195126',
    review: 'Characters were unbelievable.  Not realistic and just plain blah.'
  },
  {
    type: 'wish',
    user_id: 5,
    book_isbn: '9780689835605',
    review: 'August Book Club Pick.'
  }
];

const seedFeeling = () => Feeling.bulkCreate(feelingData);

module.exports = seedFeeling;