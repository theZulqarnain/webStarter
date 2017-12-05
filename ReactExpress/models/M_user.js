const    mysql      =    require('mysql'),
         keys       =    require('../config/keys')


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password :  keys.mysql_pwd,
    database :  keys.mysql_DB
});

// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });