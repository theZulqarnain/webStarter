var express = require('express');
var router = express.Router();
// var mongoose      = require('mongoose'),
    passport       = require('passport'),
    LocalStrategy = require('passport-local'),
    User          = require('../models/user');

/* GET users listing. */
router.post('/register', passport.authenticate('local-signup',  {
    successRedirect: '/api/users/isLoggedIn',
    failureRedirect: '/api'}
));

router.post('/login',passport.authenticate('local-signin',  {
    successRedirect: '/dashboard',
    failureRedirect: '/signin'}
));
router.get('/isLoggedin',function (req, res) {
    res.json({isLoggedin:true});
})
// logout route
router.get('/logout',function (req,res) {
    req.logout();
    // req.session.destroy()
    res.send('logout.....')
    // res.redirect()
})

router.get('/isLoggedIn',function (req,res) {
    res.json({
        isLoggedIn:true
    })
})
function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }

    res.json({isLoggedin:"false"})

}

module.exports = router;
