'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://db_usr:db_pass@ds023530.mlab.com:23530/grades_d'); 
var studentsService = require('./students_ws');
var students = require('./student');
var service = null;
var port = process.env.PORT || 3000;

mongoose.connection.once('open', function() {
  students.find({}, function(err, data) {
    if(err) {
      throw err;
    }
    service = new studentsService(data);
    mongoose.disconnect();
  });
});

app.set('json spaces', 4);
app.use(express.static('views'));

app.get('/', function(request, response, next) {
  request.next();
});

app.param('/student', function(request, response, next, value) {
  next();
});

app.get('/student/:studentID', function(request, response) {
  response.status(200).json(service.getGradeByID(request.params.studentID));
});

app.get('/topStudents', function(request, response) {
  response.status(200).json(service.getTopStudents());
});

app.get('/topStudents/:gender', function(request, response) {
  var gender = request.params.gender;
    response.status(200).json(service.getTopStudentsByGender(gender));
});

app.get('/error', function(request, response) {
  response.status(500).json({status: false, message: "Intenal error"});
})

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.listen(port);



