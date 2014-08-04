
/*
 * GET users listing.
 */

exports.index = function(req, res){
  res.send("Welcome " + req.params.username);
};