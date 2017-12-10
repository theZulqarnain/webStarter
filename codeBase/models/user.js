/*mongoose start*/
var mongoose = require('mongoose'),
    passportLocalMongoose=require('passport-local-mongoose');
mongoose.connect("mongodb://localhost/webstarter")

var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    googleId:String,
    facebookId:String,
    githubId:String
});

UserSchema.plugin(passportLocalMongoose);

module.exports =mongoose.model("User",UserSchema);
/*mongoose end*/
/*sequel start*/
module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('user', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
        firstname   : {type: Sequelize.STRING,notEmpty: true},
        lastname    : {type: Sequelize.STRING,notEmpty: true},
        username    : {type: Sequelize.TEXT},
        about       : {type: Sequelize.TEXT},
        email       : {type: Sequelize.STRING, validate: {isEmail:true} },
        password    : {type: Sequelize.STRING },
        last_login  : {type: Sequelize.DATE},
        status      : {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' },
        googleId    : {type: Sequelize.STRING},
        facebookId  : {type: Sequelize.STRING},
        githubId    : {type: Sequelize.STRING}

    });

    return User;

}
/*sequel end*/
