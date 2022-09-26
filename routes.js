var express = require('express');
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
 
    host:'localhost',
    port:'3306',
    user:'root',
    password: '', //need to figure out how to auto connect...
    database: 'mindful_db'

});

var server = app.listen(1348, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("start");

});

con.connect(function(error){
  if(error) console.log(error);
  else console.log("connected");
  con.query("SELECT * FROM USER", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

