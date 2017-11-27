var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("wtf")
  res.json({isloggedin:"true"});
});

module.exports = router;
