const   passport        =   require('passport'),
        express         =   require('express'),
        router          =   express.Router()



router.get(
    '/google',
    passport.authenticate('google',{
        scope   :   ['profile','email']
    }));

router.get(
    '/auth/google/callback',
    passport.authenticate('google')
);
router.get('/app/current_user',(req,res)=>{
    //res.json({});
    console.log(req.user)
    res.send(req.user)
});

router.get('/app/logout',(req,res)=>{
    req.logout();
    res.send("logout successfully")
})

module.exports = router;