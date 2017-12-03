// const Sequelize = require("sequelize"),
//     express = require('express'),
//      router = express.Router()
//
//
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
//
// module.exports = router;