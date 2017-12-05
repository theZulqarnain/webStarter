var express = require('express');
var router = express.Router();
var shell = require('shelljs');
var path = require("path");

router.post('/zip', function(req, res){
    console.log('express request');
    // console.log(req.body.authentication);
  // var file = path.join (__dirname, '/../codeBase.zip');
  // console.log(file);
  // return res.download(file);

  var commands =[];
  commands[0]= 'rm -rf duplicate/ && rsync -arv --exclude=codeBase/node_modules --exclude=codeBase/reactApp/node_modules codeBase duplicate/ '

  // if(!req.body.facebook){
   //  commands.push("sed -i '/facebook start/,/facebook end/d' duplicate/codeBase/routes/auth.js");
  // }
	// if(!req.body.google){
	// 	commands.push("sed -i '/google start/,/google end/d' duplicate/codeBase/routes/auth.js");
	// }
	// if(!req.body.github){
	// 	commands.push("sed -i '/github start/,/github end/d' duplicate/codeBase/routes/auth.js");
	// }
  //
  // if(!req.body.mongodb){
  //   commands.push("sed -i '/MONGOOSE START/,/MONGOOSE END/d' duplicate/codeBase/routes/auth.js")
  // }
  // if(!req.body.mysql){
		// commands.push("sed -i '/SEQUELIZE START/,/SEQUELIZE END/d' duplicate/codeBase/routes/auth.js")
  // }

	commands.push('zip -r codeBase.zip duplicate  -x "codeBase/node_modules/*" "codeBase/reactApp/node_modules/*"');

	// for(var i=0;i<commands.length;i++){


	function exec(commands, i){

		if(commands[i]){
			console.log(commands[i])
      shell.exec(commands[i],function(code,stdout,stderr){
        if(stderr) {
          // shell.echo('Error: Git commit failed');
          // shell.exit(1);
        }
        console.log(i);
        // if(i === 2){

        if( commands[i+1]){
          exec(commands, i+1)
        }

				if(commands.length == i+1){
          var file = path.join (__dirname, '/../codeBase.zip');
          console.log(file);
          setTimeout(function(){

            res.download(file);

          }, 4000)

        }
        // }
      });
		}






  }


  exec(commands, 0);
	// }
});


router.get('/expressHtml', function(req, res){
    var file = __dirname + '/../expressHtml.zip';
    return res.download(file); // Set disposition and send it.
});

router.get('/expressWithReact', function(req, res){
    var file = __dirname + '/../codeBase.zip';
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