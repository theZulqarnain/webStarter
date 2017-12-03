const   express         =   require('express'),
    passport        =   require('passport'),
    GoogleStrategy  =   require('passport-google-oauth20').Strategy,
    app             =   express(),
    keys            =   require('../config/keys'),
    router          =   express.Router();
    User            =   require('../models/M_user'),
    FacebookStrategy=   require('passport-facebook').Strategy,
    GitHubStrategy  =   require('passport-github2').Strategy,
    mysql           =   require('mysql')

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});


//Registering user
router.post('/register', function(req, res, next) {
    console.log('M_auth')
    // var newUser = new User({username:req.body.username})
    // User.register(newUser,req.body.password,function (err, user) {
    //     if(err){
    //         return res.render(err)
    //     }
    //     passport.authenticate("local")(req,res,function () {
    //         res.json({isRegistered:true})
    //     })
    // })
    // db.get().query('INSERT INTO'+keys.mysql_users_tbl+' (user_id, text, date) VALUES(?, ?, ?)', values, function(err, result) {
    //     if (err) return done(err)
    //     done(null, result.insertId)
    // })
    var con = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password :  '',
        database :  keys.mysql_DB
    })
    const username=req.body.username;
    const password=req.body.password
    console.log(username,password)
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO "+ keys.mysql_users_tbl +" (username, password) VALUES ('"+username+"','"+password+"')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
});
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
module.exports = router;