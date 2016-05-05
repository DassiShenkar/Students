'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;
var Student = null;

var studentSchema = new schema({
    firstName: String,
    lastName: String,
    gender: String,
    grade: Number
}, {collection: 'students'});

Student = mongoose.model('Student', studentSchema);

module.exports = Student;