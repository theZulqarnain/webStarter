/*mongo start*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose      = require('mongoose'),
    passport       = require('passport'),
    LocalStrategy = require('passport-local'),
    User          = require('./models/user'),
    cookieSession   =   require('cookie-session'),
    keys            =   require('./config/keys'),
    session         =   require('express-session'),
    env             = require('dotenv').load()

var index = require('./routes/index');
var auth = require('./routes/auth');

var app = express();

/*jade start*/
app.engine('pug', require('pug').renderFile);
app.set('view engine', 'pug');
/*jade end*/

/*ejs start*/
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs')
/*ejs end*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//For BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Passport Config
// app.use(require('express-session')({
//     secret:'this is abdulla zulqarnain',
//     resave:false,
//     saveUninitialized:true
// }));
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Routes

app.use('/', index);
app.use('/auth',auth);

//catch 404    and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.set('port', process.env.PORT || 10002);
app.listen(app.get('port'));

module.exports = app;
/*mongo end*/

/*sequel with react start*/
var express    = require('express')
var app        = express()
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env        = require('dotenv').load()
// var exphbs     = require('express-handlebars')

var index = require('./routes/index');
var auth = require('./routes/auth')

/*jade start*/
app.engine('jade', require('jade').renderFile);
app.set('view engine', 'jade');
/*jade end*/

/*ejs start*/
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs')
/*ejs end*/
//default engine
app.use(express.static(__dirname + '/public'));
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//Models
var models = require("./models");

//Routes
// var authRoute = require('./routes/auth.js')

app.use('/', index);
app.use('/auth',auth(models.user));

//load passport strategies
require('./services/passport.js')(passport,models.user);


//Sync Database
models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine')

}).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
});



//catch 404    and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.set('port', process.env.PORT || 10002);
app.listen(app.get('port'));

module.exports = app;
/*sequel with react end*/
