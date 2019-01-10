# Sanic Web API Data server (CRUD using redis) 

## Sanic is a Flask-like Python web server which handles web requests asycronously

## use a quick Javascript Server using NPM for a UI

### go into directory 'front_end' 

    npm install


### install pm2 globally using npm and start the front end with it

    npm i -g pm2

    pm2 start front_end/server.js 


### this demo uses Ubuntu 16, a redis DB, python 3.5, and Sanic

## make sure you are running Python 3.5 or later

### go into your terminal and type 'python' to open the python interpreter and it will tell you the version

## instal redis DB

    sudo apt update

    sudo apt install redis-server


# install sanic (these are not the instructions for using a virtualenv)

    pip3 install sanic,redis,sanic_cors

## run test UI from /front_end dir

    node server.js

## run Sanic server from this dir

    python main.py


