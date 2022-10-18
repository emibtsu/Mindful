// run as node routes.js <PW>
var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');
var pw = process.argv[2];
var str = "";
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/users', (req, res) => {

//   con.connect(function (error) {
//     if (error) console.log(error);
//     else console.log("connected");
//     con.query("SELECT * FROM USER", function (err, result, fields) {
//       //if (err) throw err;
//       console.log("USERS ");
//       str = JSON.stringify(result);
//       console.log(result);
//       res.send(result)
//     });
//   })
// })

// app.post('/users', (req, res) => {
//   console.log(req.data)
// })

var con = mysql.createConnection({

  host: 'localhost',
  port: '3306',
  user: 'root',
  password: pw, //pw enter as 'node routes.js <pw>'
  database: 'mindful_db'

});

var server = app.listen(1348, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("start");

});

con.connect(function (error) {
  if (error) console.log(error);
  else console.log("connected");
  con.query("SELECT * FROM USER", function (err, result, fields) {
    //if (err) throw err;
    console.log("USERS ");
    str = JSON.stringify(result);
    console.log(result);
  });
  con.query("SELECT * FROM POST", function (err, result, fields) {
    //if (err) throw err;
    console.log("POSTS ");
    str = JSON.stringify(result);
    console.log(result);
  });
  con.query("SELECT COUNT(*) FROM USER", function (err, result, fields) {
    //if (err) throw err;
    console.log("Users count ");
    str = JSON.stringify(result);
    if (str != null) {
      str = str.charAt(str.length - 3);
    } else {
      str = "0";
    }
    console.log(str);
  });
  con.query("SELECT COUNT(*) FROM POST", function (err, result, fields) {
    //if (err) throw err;
    console.log("Posts count ");
    str = JSON.stringify(result);
    if (str != null) {
      str = str.charAt(str.length - 3);
    } else {
      str = "0";
    }
    console.log(str);
  });
  con.query("SELECT * FROM FRIEND", function (err, result, fields) {
    //if (err) throw err;
    console.log("FRIEND CONNECTIONS ");
    console.log(result);
  });
});
con.query("SELECT COUNT(*) FROM FRIEND", function (err, result, fields) {
  //if (err) throw err;
  console.log("Friend connection count ");
  str = JSON.stringify(result);
  if (str != null) {
    str = str.charAt(str.length - 3);
  } else {
    str = "0";
  }
  console.log(str);
});
var userSearch = "Emibtsu";
con.query("SELECT COUNT(*) FROM POST WHERE Pusername = " + userSearch, function (err, result, fields) {
  //if (err) throw err;
  console.log(userSearch + " friend count ");
  str = JSON.stringify(result);
  if (str != null) {
    str = str.charAt(str.length - 3);
  } else {
    str = "0";
  }
  console.log(str);
});

