var express = require('express');
var router = express.Router();
var shell = require('shelljs');

router.get('/zip', function(req, res){
    console.log('express request')



    shell.exec('zip -r ReactExpress.zip ReactExpress  -x "ReactExpress/node_modules/*" "ReactExpress/reactApp/node_modules/*"', function(code, stdout, stderr) {
        if (stderr) {
            // shell.echo('Error: Git commit failed');
            // shell.exit(1);
        }
        var file = __dirname + '/../ReactExpress.zip';
        res.download(file)
    });



});

router.get('/expressHtml', function(req, res){
    var file = __dirname + '/../expressHtml.zip';
    return res.download(file); // Set disposition and send it.
});

router.get('/expressWithReact', function(req, res){
    var file = __dirname + '/../ReactExpress.zip';
    return res.download(file); // Set disposition and send it.
});

router.get('/expressWithVue', function(req, res){
    var file = __dirname + '/../VueExpress.zip';
    return res.download(file); // Set disposition and send it.
});

router.get('/expressWithAngular', function(req, res){
    var file = __dirname + '/../AngularExpress.zip';
    return res.download(file); // Set disposition and send it.
});

module.exports =router;