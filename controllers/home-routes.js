const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('homepage');
});

router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/dashboard');
		return;
	}
	res.render('login');
});

//localhost:3001/login
router.get('/logout', (req, res)=>{
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}
})

module.exports = router;