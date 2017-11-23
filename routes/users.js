var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/edit', function(req, res, next) {
    res.send('edit user page');
});

module.exports = router;
