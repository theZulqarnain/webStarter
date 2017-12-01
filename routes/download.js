var express = require('express');
var router = express.Router();
var shell = require('shelljs');

router.post('/zip', function(req, res){
    console.log('express request');
    // console.log(req.body.authentication);

    const authentication =req.body.authentication
    switch(authentication) {
        case 'facebook':
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
                        "sed -i '/facebook start/,/facebook end/d' duplicate/ReactExpress/routes/auth.js"

                        , function(code, stdout, stderr) {
                            if (stderr) {
                                console.log(stderr)
                                exit
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
            console.log('facebook');
            break;
        case 'google':
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
                        "sed -i '/google start/,/google end/d' duplicate/ReactExpress/routes/auth.js"

                        , function(code, stdout, stderr) {
                            if (stderr) {
                                console.log(stderr)
                                exit
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
            console.log('google');
            break;
        case 'github':
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
                                console.log(stderr)
                                exit
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
            console.log('github');
            break;
        default:
            console.log('all');
    }

    res.json('downaloding..')

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