var express = require('express');
var app = express();
var path = require('path');

app.listen( process.env.PORT || 2001, 'localhost', function(){
  console.log( "I'm listening on 2001, Dave..." );
}); // end server up
