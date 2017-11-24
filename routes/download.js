var express = require('express');
var router = express.Router();

router.get('/expressHtml', function(req, res){
    var file = __dirname + '/../expressHtml.zip';
    return res.download(file); // Set disposition and send it.
});

router.get('/expressWithReact', function(req, res){
    var file = __dirname + '/../expressWithReact.zip';
    return res.download(file); // Set disposition and send it.
});

module.exports =router;