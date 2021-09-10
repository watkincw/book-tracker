const seedFeeling = require('./feeling-seeds');
const seedBooks = require('./book-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
	await sequelize.sync({ force: true }); // drops database and re-schemas
	console.log('\n----- DATABASE SYNCED -----\n');
	
	// user data doesn't rely on any constraints so we put it first
	await seedUser();
	console.log('\n----- USERS SEEDED -----\n');
	
	await seedBooks();
	console.log('\n----- BOOKS SEEDED -----\n');
	// feeling data has book id constraint--so we do books before feelings :)
	await seedFeeling();
	console.log('\n----- FEELINGS SEEDED -----\n');

	process.exit(0);
};

seedAll();