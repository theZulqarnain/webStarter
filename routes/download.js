var express = require('express');
var router = express.Router();
var shell = require('shelljs');

router.get('/zip', function(req, res){
    console.log('express request');
    // shell.exec()

    shell.exec(
        // 'rm -rf duplicate/ && rsync -arv --exclude={ReactExpress/node_modules,ReactExpress/reactApp/node_modules} ReactExpress duplicate && zip -r ReactExpress.zip duplicate'
        'rm -rf duplicate/ && rsync -arv --exclude=ReactExpress/node_modules --exclude=ReactExpress/reactApp/node_modules ReactExpress duplicate/ '
        , function(code, stdout, stderr) {
        if (stderr) {
            // shell.echo('Error: Git commit failed');
            // shell.exit(1);
        }
        console.log(arguments)




            shell.exec(
                // 'rm -rf duplicate/ && rsync -arv --exclude={ReactExpress/node_modules,ReactExpress/reactApp/node_modules} ReactExpress duplicate && zip -r ReactExpress.zip duplicate'
                "sed -i '/github start/,/github end/d' duplicate/ReactExpress/routes/auth.js"

                , function(code, stdout, stderr) {
                    if (stderr) {
                        // shell.echo('Error: Git commit failed');
                        // shell.exit(1);
                    }
                    console.log(arguments)


                    shell.exec(
                        // 'rm -rf duplicate/ && rsync -arv --exclude={ReactExpress/node_modules,ReactExpress/reactApp/node_modules} ReactExpress duplicate && zip -r ReactExpress.zip duplicate'
                        'zip -r ReactExpress.zip duplicate  -x "ReactExpress/node_modules/*" "ReactExpress/reactApp/node_modules/*"'
                        , function(code, stdout, stderr) {
                            if (stderr) {
                                // shell.echo('Error: Git commit failed');
                                // shell.exit(1);
                            }
                            console.log(arguments)

                            var file = __dirname + '/../ReactExpress.zip';
                            res.download(file)
                        });

                });

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