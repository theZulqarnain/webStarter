pm2 stop all
pm2 delete all
cd ~/webStarter
pm2 start --name "backend" npm -- start
cd react
pm2 start --name "react" npm -- start
