'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('json spaces', 4);

app.get('/', function(request, response, next) {
  request.next();
});

app.get('/find', function(request, response) {
  var url = url.parse(request.url, true);
  var query = url.query;
  response.send('Result: ');
});

app.param('studentID', function(request, response, next, value) {
  next();
});

app.get('/student/:studentID', function(request, response) {
  response.status(200).json({studentID: "1", grade: "90"});
});

app.get('/topStudents', function(request, response) {
  response.status(200).json({studentID: "1", firstName: "Yeal", lastName: "Levi", gender: "female", grade: "90"});
});

app.get('/topStudents/female', function(request, response) {
    response.status(200).json({studentID: "1", firstName: "Yeal", lastName: "Levi", gender: "female", grade: "90"});
});

app.get('/error', function(request, response) {
  response.status(500).json({status: false, message: "Intenal error"});
})

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.listen(port);
console.log('Listening on port ' + port);


