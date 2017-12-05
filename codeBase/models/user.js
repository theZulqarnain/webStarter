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