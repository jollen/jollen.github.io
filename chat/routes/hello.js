
/*
 * GET home page.
 */

exports.index = function(req, res, next) {
  res.render('hello');
};

exports.config = function(req, res, next) {
  console.log("Do some configs here...");
  next();
};
