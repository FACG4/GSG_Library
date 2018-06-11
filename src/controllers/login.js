exports.get = (req, res) => {
  res.render('login', { style: { loginS: 'css/login.css' } });
};

exports.post = (req, res) => {
  console.log('ddddd', req.body);
  res.redirect('/admin');
};
