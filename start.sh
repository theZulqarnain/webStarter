#!/bin/sh
pm2 stop webstarter_backend
pm2 stop react_backend
pm2 delete webstarter_backend
pm2 delete react_backend
cd ~/webStarter
pm2 start --name "webstarter_backend" npm -- start
cd react
pm2 start --name "react_backend" npm -- start
