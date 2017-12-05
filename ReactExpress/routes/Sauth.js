var Sequelize     = require("sequelize"),
    express         = require('express'),
     router         = express.Router(),
    passport        = require('passport')
require('../services/passport.js')

// //Setting up the config
// var sequelize = new Sequelize('webstarter', 'root', '', {
//     host: "localhost",
//     port: 3306,
//     dialect: 'mysql'
// });
// //Checking connection status
// var test = sequelize.authenticate()
//     .then(function () {
//         console.log("CONNECTED! ");
//     })
//     .catch(function (err) {
//         console.log("SOMETHING DONE GOOFED");
//     })
//     .done();
//
// router.get('/register', function(req, res, next) {
//     var item1 = Item.build({
//         id: 1,
//         username:'abdulla',
//         password: '123'
//     });
// //Inserting Data into database
//     item1.save().complete(function (err) {
//         if (err) {
//             console.log('Error in Inserting Record');
//         } else {
//             console.log('Data successfully inserted');
//         }
//     });
//
// //Create Item Table Structure
//     var Item = sequelize.define('Item', {
//         id: Sequelize.STRING,
//         name:Sequelize.STRING,
//         description: Sequelize.STRING,
//         qty: Sequelize.INTEGER
//     });
// });

// router.post('/register', function(req, res, next) {
//     res.json('getting data')
// })
router.post('/register', passport.authenticate('local-signup', {
        successRedirect: '/api/Sauth/isLoggedin',

        failureRedirect: '/'
    }

));
// function isLoggedIn(req, res, next) {
//
//     if (req.isAuthenticated())
//         return next();
//     res.redirect('/signin');
// }
router.get('/isLoggedin',function (req, res) {
    res.json({isLoggedin:true});
});
router.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/');

    });

}

module.exports = router;