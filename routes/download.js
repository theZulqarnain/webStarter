var express = require('express');
var router = express.Router();
var shell = require('shelljs');
var path = require("path");

router.get('/zip', function(req, res){
    console.log('express request');
    console.log(req.query)

  var commands =[];
  commands[0]= 'rm -rf duplicate/ && rsync -arv --exclude=codeBase/node_modules --exclude=codeBase/reactApp/node_modules codeBase duplicate/ '

  if(!req.query.authentication.facebook){
    commands.push("sed -i '/facebook start/,/facebook end/d' duplicate/codeBase/routes/auth.js");
    commands.push("sed -i '/facebook button/,/facebook button end/d' duplicate/codeBase/reactApp/Users/login.js");
  }
  if(!req.query.authentication.google){
  	commands.push("sed -i '/google start/,/google end/d' duplicate/codeBase/routes/auth.js");
	  commands.push("sed -i '/google button/,/google button end/d' duplicate/codeBase/reactApp/Users/login.js");
  }

  if(!req.query.authentication.github){
  	commands.push("sed -i '/github start/,/github end/d' duplicate/codeBase/routes/auth.js");
	  commands.push("sed -i '/github button/,/github button end/d' duplicate/codeBase/reactApp/Users/login.js");
  }

  if(!req.query.database.mongodb){
    commands.push("sed -i '/MONGOOSE START/,/MONGOOSE END/d' duplicate/codeBase/routes/auth.js")
    commands.push("sed -i '/mongoose start/,/mongoose end/d' duplicate/codeBase/models/user.js")
    commands.push("sed -i '/mongoose start/,/mongoose end/d' duplicate/codeBase/services/passport.js");
    commands.push("sed -i '/mongo start/,/mongo end/d' duplicate/codeBase/app.js");
    commands.push("sed -i '/mongoose form start/,/mongoose form end/d' duplicate/codeBase/views/auth/register.ejs");
    commands.push("sed -i '/mongoose form start/,/mongoose form end/d' duplicate/codeBase/views/auth/login.ejs");
    commands.push("sed -i '/mongoose form start/,/mongoose form end/d' duplicate/codeBase/views/auth/login.pug");
    commands.push("sed -i '/mongoose form start/,/mongoose form end/d' duplicate/codeBase/views/auth/register.pug");

      if(req.query.frontend.react) {
          commands.push("sed -i '/mongo login start/,/mongo login end/d' duplicate/codeBase/reactApp/Users/login.js");
          commands.push("sed -i '/mongo form start/,/mongo form  end/d' duplicate/codeBase/reactApp/Users/login.js");
          commands.push("sed -i '/mongo register function start/,/sequel register function end/d' duplicate/codeBase/reactApp/Users/register.js");
          commands.push("sed -i '/mongo form start/,/mongo form end/d' duplicate/codeBase/reactApp/Users/register.js");
      }
  }
  if(!req.query.database.mysql){
		commands.push("sed -i '/SEQUELIZE START/,/SEQUELIZE END/d' duplicate/codeBase/routes/auth.js");
		commands.push("sed -i '/sequel start/,/sequel end/d' duplicate/codeBase/models/user.js");
		commands.push("sed -i '/sequel start/,/sequel end/d' duplicate/codeBase/services/passport.js");
      commands.push("sed -i '/sequel with react start/,/sequel with react end/d' duplicate/codeBase/app.js");
      commands.push(" rm duplicate/codeBase/config/config.json");
      commands.push("sed -i '/sequelize form start/,/sequelize form end/d' duplicate/codeBase/views/auth/register.ejs");
      commands.push("sed -i '/sequelize form start/,/sequelize form end/d' duplicate/codeBase/views/auth/login.ejs");
      commands.push("sed -i '/sequelize form start/,/sequelize form end/d' duplicate/codeBase/views/auth/register.pug");
      commands.push("sed -i '/sequelize form start/,/sequelize form end/d' duplicate/codeBase/views/auth/login.pug");
      if(req.query.frontend.react) {
          commands.push("sed -i '/sequel login start/,/sequel login end/d' duplicate/codeBase/reactApp/Users/login.js");
          commands.push("sed -i '/sequel form start/,/sequel form end/d' duplicate/codeBase/reactApp/Users/login.js");
          commands.push("sed -i '/sequel register function  start/,/sequel register function  end/d' duplicate/codeBase/reactApp/Users/register.js");
          commands.push("sed -i '/sequel form start/,/sequel form end/d' duplicate/codeBase/reactApp/Users/register.js");
      }
  }
    if(req.query.database.mongodb){
        commands.push("sed -i '/react start/,/react end/d' duplicate/codeBase/models/index.js");
    }
  if(req.query.frontend.react){
	  commands.push("sed -i '/jade start/,/jade end/d' duplicate/codeBase/app.js");
	  commands.push("sed -i '/ejs start/,/ejs end/d' duplicate/codeBase/app.js");
	  commands.push("rm duplicate/codeBase/public/stylesheets/main.css");
	  commands.push("sed -i '/ejs,jade start/,/ejs,jade end/d' duplicate/codeBase/routes/auth.js");
	  commands.push("sed -i '/ejs,jade start/,/ejs,jade end/d' duplicate/codeBase/routes/index.js");
	  commands.push("rm -rf duplicate/codeBase/views");

  } else {
	  if(req.query.frontend.ejs){
		  commands.push("sed -i '/jade start/,/jade end/d' duplicate/codeBase/app.js");
		  commands.push("find duplicate/codeBase/views/*.pug -delete");
		  commands.push("find duplicate/codeBase/views/auth/*.pug -delete");
		  commands.push("find duplicate/codeBase/views/partials/*.pug -delete");
		  commands.push("sed -i '/react start/,/react end/d' duplicate/codeBase/routes/auth.js");
		  commands.push("sed -i '/react start/,/react end/d' duplicate/codeBase/routes/index.js");
		  commands.push("rm -rf duplicate/codeBase/reactApp");
		  if(req.query.database.mongodb){
              commands.push("sed -i '/ejs,jade start/,/ejs,jade end/d' duplicate/codeBase/routes/index.js");
          }
	  }
	  if(req.query.frontend.pug){
		  commands.push("sed -i '/ejs start/,/ejs end/d' duplicate/codeBase/app.js");
		  commands.push("find duplicate/codeBase/views/*.ejs -delete");
		  commands.push("find duplicate/codeBase/views/auth/*.ejs -delete");
		  commands.push("find duplicate/codeBase/views/partials/*.ejs -delete");
		  commands.push("sed -i '/react start/,/react end/d' duplicate/codeBase/routes/auth.js");
		  commands.push("sed -i '/react start/,/react end/d' duplicate/codeBase/routes/index.js");
		  commands.push("rm -rf duplicate/codeBase/reactApp");
          if(req.query.database.mongodb){
              commands.push("sed -i '/ejs,jade start/,/ejs,jade end/d' duplicate/codeBase/routes/index.js");
          }
	  }
  }

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
          // var file = __dirname + '/../codeBase.zip';
          console.log(file);
            return res.download(file);


        }
        // }
      });
		}
  }


  exec(commands, 0);
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