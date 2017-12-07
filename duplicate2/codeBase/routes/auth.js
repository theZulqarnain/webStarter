
/*MONGOOSE START*/
const   express         =   require('express'),
        passport        =   require('passport'),
        GoogleStrategy  =   require('passport-google-oauth20').Strategy,
        app             =   express(),
        keys            =   require('../config/keys'),
        router          =   express.Router();
        User            =   require('../models/user'),
        FacebookStrategy=   require('passport-facebook').Strategy,
        GitHubStrategy  =   require('passport-github2').Strategy

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////Local AUTH///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
//Local Strategy


//Registering user
router.get('/register',function(req, res, next){
    res.render('auth/register')
})
router.post('/register', function(req, res, next) {
    var newUser = new User({username:req.body.username})
    User.register(newUser,req.body.password,function (err, user) {
        if(err){
            return res.render(err)
        }
        passport.authenticate("local")(req,res,function () {
            // res.render('/index')
        })
    })
    res.redirect('/auth/login')
});
//Logging User
router.get('/login',function (req, res, next) {
    res.render('auth/login')
})
router.post('/login',passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/auth/login',
    }),function (req,res) {

});
// //sending value to React
// router.get('/isLoggedin',function (req, res) {
//     res.json({isLoggedin:true});
// })

// logout route
router.get('/logout',function (req,res) {
    req.logout();
    res.redirect('/')
})



module.exports = router;
/*MONGOOSE END*/

