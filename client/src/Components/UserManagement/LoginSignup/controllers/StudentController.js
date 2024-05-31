import React from "react";
import { StudentView } from "../views/UserDetailsView";

export const StudentController = ({ student, setStudent }) => {

  const handleChange = (e) => {
    const updatedStudent = {
      ...student,
      [e.target.name]: e.target.value,
    };
    setStudent(updatedStudent);
  };

  return <StudentView student={student} handleChange={handleChange} />;
};
