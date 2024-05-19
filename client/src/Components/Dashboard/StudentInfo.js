import React from "react";
import { useAuth } from "../UserManagement/AuthContext";

const StudentInfo = () => {
  const { authUser} = useAuth();

  return (
    <section className="student-info-wrapper">
      <h3>Student Information</h3>
      <ul className="student-info">
        <li>
          <p className="title">Student ID:</p>
          <p className="description">{authUser != null ? authUser.studentInfo.studentID : "Guest"}</p>
        </li>
        <li>
          <p className="title">Student Name:</p>
          <p className="description">{authUser != null ? authUser.studentInfo.firstname + " " + authUser.studentInfo.lastname : "Guest"}</p>
        </li>
        <li>
          <p className="title">Email:</p>
          <p className="description">{authUser != null ? authUser.studentInfo.email : "Guest"}</p>
        </li>
        <li>
          <p className="title">Degree Program</p>
          <p className="description">{authUser != null ? authUser.studentInfo.degreeProgram : "Guest"}</p>
        </li>
      </ul>
      <div className="separator" />
    </section>
  );
};

export default StudentInfo;
