const { User } = require('../models');

const userData = [
  {
    username: 'nobody',
    email: 'nobody@special.com',
    password: '12345'
  },
  {
    username: 'somebody',
    email: 'somebody@special.com',
    password: 'abcde'
  },
  {
    username: 'cutie',
    email: 'cutie@pie.com',
    password: 'ABCDE'
  },
  {
    username: 'shrek',
    email: 'shrek@ogre.com',
    password: 'grouch'
  },
  {
    username: 'fiona',
    email: 'fiona@princess.com',
    password: 'pain'
  },
  {
    username: 'charming',
    email: 'charming@prince.com',
    password: 'dumb'
  },
  {
    username: 'godmother',
    email: 'godmother@fairy.com',
    password: 'Wish*'
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
