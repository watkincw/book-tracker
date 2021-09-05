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
  },
  {
    username: 'boblahblah',
    email: 'bob@bob.com',
    password: '$2b$10$5m8sgMsUUnn9EFx5kKm/veeTLjWSKGgiCVGUQZa4euTzcul0HiMby'
  } // bobbob => $2b$10$5m8sgMsUUnn9EFx5kKm/veeTLjWSKGgiCVGUQZa4euTzcul0HiMby
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
