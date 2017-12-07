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

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'));

module.exports = app;
