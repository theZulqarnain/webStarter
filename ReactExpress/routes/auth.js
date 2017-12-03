// const   express         =   require('express'),
//         passport        =   require('passport'),
//         GoogleStrategy  =   require('passport-google-oauth20').Strategy,
//         app             =   express(),
//         keys            =   require('../config/keys'),
//         router          =   express.Router();
//         User            =   require('../models/user'),
//         FacebookStrategy=   require('passport-facebook').Strategy,
//         GitHubStrategy  =   require('passport-github2').Strategy
//
// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });
//
// passport.deserializeUser((id, done) => {
//     User.findById(id).then(user => {
//         done(null, user);
//     });
// });
//
// //////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////Local AUTH///////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////
// //Local Strategy
//
//
// //Registering user
// router.post('/register', function(req, res, next) {
//     var newUser = new User({username:req.body.username})
//     User.register(newUser,req.body.password,function (err, user) {
//         if(err){
//             return res.render(err)
//         }
//         passport.authenticate("local")(req,res,function () {
//             res.json({isRegistered:true})
//         })
//     })
// });
// //Logging User
// router.post('/login',passport.authenticate('local',
//     {
//         successRedirect: '/api/auth/isLoggedin',
//         failureRedirect: '/',
//     }),function (req,res) {
//
// });
// //sending value to React
// router.get('/isLoggedin',function (req, res) {
//     res.json({isLoggedin:true});
// })
//
// // logout route
// router.get('/logout',function (req,res) {
//     req.logout();
//     res.json({})
// })
//
//
// /*google start*/
// //////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////Google AUTH///////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////
// passport.use(new GoogleStrategy(
//     {
//         clientID    :   keys.googleClientID,
//         clientSecret:   keys.googleClientSecret,
//         callbackURL :   '/auth/google/callback'
//     },
//     ( accessToken,refreshToken,profile,done) =>{
//         console.log(accessToken, refreshToken, done);
//         User.findOne({googleId:profile.id})
//             .then(existingUser=>{
//                 if(existingUser){
//                     done(null,existingUser)
//                 }else{
//                     new User({googleId:profile.id})
//                         .save()
//                         .then(user=>done(null,user))
//
//                 }
//             })
//
//     }
// ));
//
// router.get(
//     '/google',
//     passport.authenticate('google',{
//         scope   :   ['profile','email']
//     }));
// router.get('/google/callback',passport.authenticate('google'),
//     (req, res) => {
//         res.redirect('/auth/isLoggedin');
//     }
// );
// router.get('/app/current_user',(req,res)=>{
//     // res.json({});
//     res.send(req.user);
//     // console.log(req.user)
// });
//
// // router.get('/app/logout',(req,res)=>{
// //     req.logout();
// //     res.send('logging out........')
// // })
// /*google end*/
// /*facebook start*/
// //////////////////////////////////////////////////////////////////////////////////////////////////
//   ////////////////////////////////FACEBOOK AUTH///////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////
// passport.use(new FacebookStrategy({
//         clientID: keys.facebookClientID,
//         clientSecret: keys.facebookClientSecret,
//         callbackURL: "/auth/facebook/callback"
//     },
//     ( accessToken,refreshToken,profile,done) =>{
//         console.log(accessToken, refreshToken, done);
//         User.findOne({facebookId:profile.id})
//             .then(existingUser=>{
//                 if(existingUser){
//                     done(null,existingUser)
//                 }else{
//                     new User({facebookId:profile.id})
//                         .save()
//                         .then(user=>done(null,user))
//
//                 }
//             })
//
//     }
// ));
//
// router.get('/facebook',
//     passport.authenticate('facebook'));
//
// router.get('/facebook/callback',passport.authenticate('facebook'),
//     (req, res) => {
//         res.redirect('/auth/isLoggedin');
//     }
// );
// /*facebook end*/
// /*github start*/
// //////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////GitHub AUTH///////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////
// passport.use(new GitHubStrategy({
//         clientID: keys.githubClientID,
//         clientSecret: keys.githubClientSecret,
//         callbackURL: "/auth/github/callback"
//     },
//     ( accessToken,refreshToken,profile,done) =>{
//         console.log(accessToken, refreshToken, done);
//         User.findOne({githubId:profile.id})
//             .then(existingUser=>{
//                 if(existingUser){
//                     done(null,existingUser)
//                 }else{
//                     new User({githubId:profile.id})
//                         .save()
//                         .then(user=>done(null,user))
//
//                 }
//             })
//
//     }
// ));
//
// router.get('/github',function(req,res,next){console.log("ss");next();},
//     passport.authenticate('github', { scope: [ 'user:email' ] }));
//
// router.get('/github/callback',
//     passport.authenticate('github', { failureRedirect: '/' }),
//     function(req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('/auth/isLoggedin');
//     });
// /*github end*/
// module.exports = router;