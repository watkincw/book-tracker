const { User } = require('../models');

const userData = [
	{
		username: 'nobody',
		email: 'nobody@special.com',
		password: '$2b$10$if8EIPwcTmFc13eaYnYP4eH.QoEBrbsKUPBXtZKZE3spl2tiEvvBO'
		// 12345 => $2b$10$if8EIPwcTmFc13eaYnYP4eH.QoEBrbsKUPBXtZKZE3spl2tiEvvBO
	},
	{
		username: 'somebody',
		email: 'somebody@special.com',
		password: '$2b$10$8cGD.gE2OHom5ptujbkLs.ys9tl9RX8joItlgcE8L/SkmMBICLSqy'
		// 'abcde' => $2b$10$8cGD.gE2OHom5ptujbkLs.ys9tl9RX8joItlgcE8L/SkmMBICLSqy
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
		password: '$2b$10$GjxkuzsLmHw7GKsMZT3tGusRu8O7x6S5L3tLNMLJKxzLvLB6tRR8e'
		// Wish* => $2b$10$GjxkuzsLmHw7GKsMZT3tGusRu8O7x6S5L3tLNMLJKxzLvLB6tRR8e
	},
	{
		username: 'boblahblah',
		email: 'bob@bob.com',
		password: '$2b$10$5m8sgMsUUnn9EFx5kKm/veeTLjWSKGgiCVGUQZa4euTzcul0HiMby'
	} // bobbob => $2b$10$5m8sgMsUUnn9EFx5kKm/veeTLjWSKGgiCVGUQZa4euTzcul0HiMby
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
