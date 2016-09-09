var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );


app.listen( process.env.PORT || 2001, 'localhost', function(){
  console.log( "I'm listening on 2001, Dave..." );
}); // end server up

app.get('/', function(req, res){
  console.log('base URL hit');
  //send index file from resolved path
  res.sendFile(path.resolve('public/index.html'));
});

app.use(express.static('public'));
///////
