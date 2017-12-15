/*react start*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({isloggedin:"false"});
});

module.exports = router;
/*react end*/
/*ejs,jade start*/
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index')
});


module.exports = router;
/*ejs,jade end*/
