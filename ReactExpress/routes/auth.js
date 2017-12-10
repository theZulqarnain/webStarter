module.exports = function(user){
const   express         =   require('express'),
        passport        =   require('passport'),
        GoogleStrategy  =   require('passport-google-oauth20').Strategy,
        app             =   express(),
        keys            =   require('../config/keys'),
        router          =   express.Router(),
        FacebookStrategy=   require('passport-facebook').Strategy,
        GitHubStrategy  =   require('passport-github2').Strategy;

        var User;

        if(user){
            User = user
        }else{
            require('../models/user');
        }

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


    /* GET users listing. */
    router.post('/register', passport.authenticate('local-signup',  {
        successRedirect: '/api/',
        failureRedirect: '/api/register'}
    ));

    router.post('/login',isLoggedIn,passport.authenticate('local-signin',  {
        successRedirect: '/api/auth/isLoggedIn',
        failureRedirect: '/api'}
    ));
    router.get('/isLoggedin',isLoggedIn,function (req, res) {
        res.json({isLoggedin:true});
    })
// logout route
    router.get('/logout',function (req,res) {
        req.logout();
        // req.session.destroy()
        res.send('logout.....')
        // res.redirect()
    })

    function isLoggedIn(req,res,next) {
        if(req.isAuthenticated()){
            return next();
        }

        res.json({isLoggedin:"false"})

    }

/*google start*/
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////Google AUTH///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
passport.use(new GoogleStrategy(
    {
        clientID    :   keys.googleClientID,
        clientSecret:   keys.googleClientSecret,
        callbackURL :   '/auth/google/callback'
    },
    ( accessToken,refreshToken,profile,done) =>{
        console.log(profile);
        User.findOne({where:{googleId:profile.id}})
            .then(existingUser=>{
                if(existingUser){
                    done(null,existingUser)
                }else{
                    new User({googleId:profile.id,username:profile.displayName})
                        .save()
                        .then(user=>done(null,user))

                }
            })

    }
));

router.get(
    '/google',
    passport.authenticate('google',{
        scope   :   ['profile','email']
    }));
router.get('/google/callback',passport.authenticate('google'),
    (req, res) => {
        res.redirect('/auth/isLoggedin');
    }
);
router.get('/app/current_user',(req,res)=>{
    // res.json({});
    res.send(req.user);
    // console.log(req.user)
});

// router.get('/app/logout',(req,res)=>{
//     req.logout();
//     res.send('logging out........')
// })
/*google end*/
/*facebook start*/
//////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////FACEBOOK AUTH///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
passport.use(new FacebookStrategy({
        clientID: keys.facebookClientID,
        clientSecret: keys.facebookClientSecret,
        callbackURL: "/auth/facebook/callback"
    },
    ( accessToken,refreshToken,profile,done) =>{
        console.log(profile);
        User.findOne({where:{facebookId:profile.id}})
            .then(existingUser=>{
                if(existingUser){
                    done(null,existingUser)
                }else{
                    new User({facebookId:profile.id,username:profile.displayName})
                        .save()
                        .then(user=>done(null,user))

                }
            })

    }
));

router.get('/facebook',
    passport.authenticate('facebook'));

router.get('/facebook/callback',passport.authenticate('facebook'),
    (req, res) => {
        res.redirect('/auth/isLoggedin');
    }
);
/*facebook end*/
/*github start*/
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////GitHub AUTH///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
passport.use(new GitHubStrategy({
        clientID: keys.githubClientID,
        clientSecret: keys.githubClientSecret,
        callbackURL: "/auth/github/callback"
    },
    ( accessToken,refreshToken,profile,done) =>{
        console.log(profile);
            User.findOne({where:{githubId:profile.id}})
            .then(existingUser=>{
                if(existingUser){
                    done(null,existingUser)
                }else{
                    new User({githubId:profile.id,username:profile.displayName})
                        .save()
                        .then(user=>done(null,user))

                }
            })

    }
));

router.get('/github',function(req,res,next){console.log("ss");next();},
    passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/auth/isLoggedin');
    });
/*github end*/
// module.exports = router;



    return router;
}