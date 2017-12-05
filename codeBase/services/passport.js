const passport = require('passport'),
    user =require('../Smodels/user')
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const mongoose = require('mongoose');
// const keys = require('../config/keys'),
//     bCrypt = require('bcrypt-nodejs');
//
// const User = mongoose.model('users');
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


//load bcrypt
var bCrypt = require('bcrypt-nodejs');


module.exports = function(passport, user) {


    var User = user;

    var LocalStrategy = require('passport-local').Strategy;

    //serialize
    passport.serializeUser(function(user, done) {

        done(null, user.id);

    });

    // deserialize user
    passport.deserializeUser(function(id, done) {

        User.findById(id).then(function(user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });


    passport.use('local-signup', new LocalStrategy(

        {

            usernameField: 'email',

            passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },



        function(req, email, password, done) {

            var generateHash = function(password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };



            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {

                if (user)

                {

                    return done(null, false, {
                        message: 'That email is already taken'
                    });

                } else

                {

                    var userPassword = generateHash(password);

                    var data =

                        {
                            email: email,

                            password: userPassword,

                            firstname: req.body.firstname,

                            lastname: req.body.lastname

                        };

                    User.create(data).then(function(newUser, created) {

                        if (!newUser) {

                            return done(null, false);

                        }

                        if (newUser) {

                            return done(null, newUser);

                        }

                    });

                }

            });

        }

    ));

}