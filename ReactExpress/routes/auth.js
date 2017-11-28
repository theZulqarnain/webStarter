const   express         =   require('express'),
    passport        =   require('passport'),
    GoogleStrategy  =   require('passport-google-oauth20').Strategy,
    app             =   express(),
    keys            =   require('../config/keys'),
    router          =   express.Router();
User            =   require('../models/user'),
    cookieSession   =   require('cookie-session');

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{
        done(null,user);
    });
});
passport.use(new GoogleStrategy(
    {
        clientID    :   keys.googleClientID,
        clientSecret:   keys.googleClientSecret,
        callbackURL :   '/auth/google/callback'
    },
    ( accessToken,refreshToken,profile,done) =>{
        console.log(accessToken);
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
router.get('/google/callback',passport.authenticate('google'), (req,res)=>{res.json(req.user)});
router.get('/app/current_user',(req,res)=>{
    res.json({});
    // console.log(req.user)
});

module.exports = router;