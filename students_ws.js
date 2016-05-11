'use strict';

var _ = require('lodash');
var express = require('express');
var EventEmitter = require('events').EventEmitter;
var eventsConfig = require('./config').events;

class StudentsQuery extends EventEmitter {
    constructor(data) {
        super();
        this.data = data;
        this.result = null;

        this.on(eventsConfig.GET_GRADE_BY_ID, function(studentID) {
            var result = null;
            result = _.find(this.data, function(student) {
                return student._id == studentID;
            });
            if(result == null) {
                result = {'Error' :'Student does not exist'};
            }
            this.result = result;
        });

        

        this.on(eventsConfig.GET_TOP_STUDENTS, function() {
            var result = null;
            result = _.pickBy(this.data, function(student) {
                return student.grade >= 95;
            });
            if(result == null) {
                result = {'Error' :'Student does not exist'};
            }
            this.result = result;
        });


        this.on(eventsConfig.GET_TOP_STUDENTS_BY_GENDER, function(gender) {
            var result = null;
            result = _.pickBy(this.data, function(student) {
                return student.gender == gender && student.grade >= 95;
            });
            if(result == null) {
                result = {'Error' :'Student does not exist'};
            }
            this.result = result;
        });

    }

    getGradeByID(studentID) {
        this.emit(eventsConfig.GET_GRADE_BY_ID, studentID);
        return this.result;
    }
    
    getTopStudents() {
        this.emit(eventsConfig.GET_TOP_STUDENTS);
        return this.result;
    }

    getTopStudentsByGender(gender) {
        this.emit(eventsConfig.GET_TOP_STUDENTS_BY_GENDER, gender);
        return this.result;
    }
    
}

module.exports = StudentsQuery;
