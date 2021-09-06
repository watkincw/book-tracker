const { Feeling } = require('../models');

const feelingData = [
  {
    type: 'like',
    user_id: 1,
    book_id: '9780688084882'
  },
  {
    type: 'like',
    user_id: 1,
    book_id: '9781931195126'
  },
  {
    type: 'dislike',
    user_id: 1,
    book_id: '0143105426'
  },
  {
    type: 'wish',
    user_id: 1,
    book_id: '9780689835605'
  },
  {
    type: 'wish',
    user_id: 1,
    book_id: '9780142005255'
  },
  {
    type: 'wish',
    user_id: 6,
    book_id: '9780688084882'
  },
  {
    type: 'wish',
    user_id: 6,
    book_id: '9781931195126'
  },
  {
    type: 'wish',
    user_id: 6,
    book_id: '0143105426'
  },
  {
    type: 'wish',
    user_id: 6,
    book_id: '9780689835605'
  },
  {
    type: 'wish',
    user_id: 6,
    book_id: '9780142005255'
  },
  {
    type: 'like',
    user_id: 2,
    book_id: '9780688084882'
  },
  {
    type: 'like',
    user_id: 2,
    book_id: '9781931195126'
  },
  {
    type: 'dislike',
    user_id: 4,
    book_id: '0143105426'
  },
  {
    type: 'wish',
    user_id: 3,
    book_id: '9780142005255'
  },
  {
    type: 'dislike',
    user_id: 5,
    book_id: '9781931195126'
  },
  {
    type: 'wish',
    user_id: 5,
    book_id: '9780689835605'
  }
];

const seedFeeling = () => Feeling.bulkCreate(feelingData);

module.exports = seedFeeling;