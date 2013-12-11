
exports.index = function(req, res)
{
  res.render('index', { title: 'Express' });
};
exports.home = function(req, res)
{
	res.render('home.ejs', {title: "Welcome to WorkSmart!"});
};
exports.profile = function(req, res)
{
	res.render('profile.ejs', {title: 'User\s Profile'});
};
exports.umass = function(req, res)
{
	res.render('umass-page.ejs', {title: 'Umass'});
};
exports.threetwentyfive = function(req, res)
{
	res.render('325-page.ejs', {title: 'CS 325'});
};
exports.exam1 = function(req, res)
{
	res.render('exam1-page.ejs', {title: 'Exam1'});
};
exports.exam1_details = function(req, res)
{
	res.render('exam1-details.ejs', {title: 'Details'});
};
exports.eva = function(req, res)
{
	res.render('eva.ejs', {title: 'Professor'});
};
exports.favorites = function(req, res)
{
	res.render('favorites.ejs', {title: 'favorites'});
};