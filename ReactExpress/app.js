var express    = require('express')
var app        = express()
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env        = require('dotenv').load()
// var exphbs     = require('express-handlebars')

var index = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth')



//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//For Handlebars
// app.set('views', './views')
// app.engine('hbs', exphbs({extname: '.hbs'}));
// app.set('view engine', '.hbs');


app.get('/', function(req, res){
    res.json({});
});


//Models
var models = require("./models");


//Routes
// var authRoute = require('./routes/auth.js')

app.use('/', index);
// app.use('/users', users);
app.use('/auth',auth(models.user));

//load passport strategies
require('./services/passport.js')(passport,models.user);


//Sync Database
models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine')

}).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
});



app.listen(8080, function(err){
    if(!err)
        console.log("Site is live"); else console.log(err)

});




    