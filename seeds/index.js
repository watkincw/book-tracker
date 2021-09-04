const seedFeeling = require('./feeling-seeds');
const seedBooks = require('./book-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedFeeling();
  console.log('\n----- FEELINGS SEEDED -----\n');

  await seedBooks();
  console.log('\n----- BOOKS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();