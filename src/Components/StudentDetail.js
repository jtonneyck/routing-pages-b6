import React from 'react';
import students from "../data/students.json";

const StudentDetail = (props) => {
    // req.params.firstname
    var studentName = props.match.params.firstname

    var filteredStudent = students.filter((student)=> student.firstname === studentName)[0]

    return (
        <div>
            <h1>{filteredStudent.firstname} {filteredStudent.lastname}</h1>
            <p>Email: {filteredStudent.email}</p>
        </div>
    );
}

export default StudentDetail;
