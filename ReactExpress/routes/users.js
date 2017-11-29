var express = require('express');
var router = express.Router();
var mongoose      = require('mongoose'),
    passport       = require('passport'),
    LocalStrategy = require('passport-local'),
    User          = require('../models/user');

/* GET users listing. */
router.post('/register', function(req, res, next) {
    var newUser = new User({username:req.body.username})
    User.register(newUser,req.body.password,function (err, user) {
        if(err){
          return res.render(err)
        }
        passport.authenticate("local")(req,res,function () {
            res.json({isRegistered:true})
        })
    })
});

router.post('/login',passport.authenticate('local',
    {
            successRedirect: '/api/users/isLoggedin',
            failureRedirect: '/',
    }),function (req,res) {

});
router.get('/isLoggedin',function (req, res) {
    res.json({isLoggedin:true});
})
// logout route
router.get('/logout',function (req,res) {
    req.logout();
    res.send('logout.....')
    // res.redirect()
})

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }

}

module.exports = router;
