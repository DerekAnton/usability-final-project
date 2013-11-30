
exports.index = function(req, res)
{
  res.render('index', { title: 'Express' });
};
exports.home = function(req, res)
{
	res.render('home.ejs', {title: "Welcome to WorkSmart!"});
};
exports.login = function(req, res)
{
	res.render('login.ejs', {title: 'Login'});
};