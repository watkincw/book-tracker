const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/users', userRoutes);

module.exports = router;