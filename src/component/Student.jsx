import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Student = () => {
    const param = useParams();
    const [studentInfo, setStudentInfo] = useState([
        { sid: "1", sname: "Student1", marks: "90%" },
        { sid: "2", sname: "Student2", marks: "80%" },
        { sid: "3", sname: "Student3", marks: "70%" },
        { sid: "4", sname: "Student4", marks: "60%" },
    ]);

    return (
        <div className='bg-primary-subtle'>
            {param.name ? (
                <p>
                    Student Name: {param.name}
                    <br />
                    Marks: {studentInfo.find((student) => student.sname === param.name)?.marks}
                </p>
            ) : (
                studentInfo.map((student) => (
                    <div key={student.sid}>
                        <p>Student Name: {student.sname}</p>
                        <p>Marks: {student.marks}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Student;