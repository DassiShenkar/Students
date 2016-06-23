# Students
A service for managing students information

## Welcome Page
returns a list of all the students
https://students-ws.herokuapp.com/

## student object structure:

    {
        "_id": "572a8098c80eb653c302d3e0",
        "firstName": "Yael",
        "lastName": "Levi",
        "gender": "female",
        "grade": 95
    }

## GetStudentById
returns student info when given id or an error message 
if it doesn't find a match.</br>
https://students-ws.herokuapp.com/student/572a80a8c80eb653c302d3e5

## GetTopStudents
returns a list of students who's everage grade is over 95 
or an error message if it doesn't find a match.</br>
https://students-ws.herokuapp.com/topStudents

## GetTopStudentsByGender
returns a list of students of a given gender 
who's everage grade is over 95 or an error message if it doesn't find a match.</br>
https://students-ws.herokuapp.com/topStudents/female

