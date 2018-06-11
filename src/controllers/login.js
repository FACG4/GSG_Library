exports.get = (req, res) => {
	res.render('login', { style: { loginS: 'css/login.css' } });
};

exports.post = (req, res) => {

	res.redirect('/admin');
};
