const router = require('express').Router();
const sequelize = require('../config/connection');
const { Book, User, Feeling } = require('../models');
//localhost:3001/api/dashboard subaddress


router.get ('/', (req, res) => {
    res.render('dashboard', { loggedIn: true });
});

module.exports = router;