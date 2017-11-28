const   express         =   require('express'),
        passport        =   require('passport'),
        GoogleStrategy  =   require('passport-google-oauth20').Strategy,
        app             =   express(),
        keys            =   require('../config/keys'),
        router          =   express.Router();
        User            =   require('../models/user')


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy(
    {
        clientID    :   keys.googleClientID,
        clientSecret:   keys.googleClientSecret,
        callbackURL :   '/auth/google/callback'
    },
    ( accessToken,refreshToken,profile,done) =>{
        console.log(accessToken, refreshToken, done);
        User.findOne({googleId:profile.id})
            .then(existingUser=>{
                if(existingUser){
                    done(null,existingUser)
                }else{
                    new User({googleId:profile.id})
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
router.get('/google/callback',passport.authenticate('google'));
router.get('/app/current_user',(req,res)=>{
    // res.json({});
    res.send(req.user);
    // console.log(req.user)
});

router.get('/app/logout',(req,res)=>{
    req.logout();
    res.send('logging out........')
})

module.exports = router;