var express = require( "express");
var cors = require('cors');
var path = require( "path");
var bodyParser = require('body-parser');


var app = express();

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');

const port = 80;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Content-Length,Authorization,x-access-token");
      //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.send(200);
    }
    else {
    //move on
      next();
    }
});

//app.use(cors({origins:'*'}));
app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.json());



app.get("/", function (req, res){

    res.render('index');

})

app.listen(port,'0.0.0.0',function() {
 console.log("listening on port " + port);
});

