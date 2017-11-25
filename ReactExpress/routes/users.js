var express = require('express');
var router = express.Router();
var mongoose      = require('mongoose'),
    passport       = require('passport'),
    LocalStrategy = require('passport-local'),
    User          = require('../models/user');

/* GET users listing. */
router.post('/', function(req, res, next) {
    var newUser = new User({username:req.body.username})
    User.register(newUser,req.body.password,function (err, user) {
        if(err){
          return res.render(err)
        }
        passport.authenticate("local")(req,res,function () {
            res.json("user inserted!")
        })
    })
});

module.exports = router;
