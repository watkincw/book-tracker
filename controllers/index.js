const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes.js');

const dataRoutes = require('./api/');
const htmlRoutes = require('./home-routes');
//localhost:3001/
router.use('/', htmlRoutes);
//everything behind html routes should use our handlebars renderer--- res.render('template', {data})
// localhost:/3001/api
router.use('/api', dataRoutes);
// everything behind here should be data based. therefore res.json()
router.use('/dashboard', dashboardRoutes);

module.exports = router;