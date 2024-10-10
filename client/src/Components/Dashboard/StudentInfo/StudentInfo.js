import React from "react";

const StudentInfo = ({ userInfo, authUser }) => {
  return (
    <section className="student-info-wrapper">
      <h3>Student Information</h3>
      <ul className="student-info">
        <li>
          <p className="title">Student ID:</p>
          <p className="description">
            {authUser != null ? userInfo.studentId : "Guest"}
          </p>
        </li>
        <li>
          <p className="title">Student Name:</p>
          <p className="description">
            {authUser != null
              ? userInfo.user.firstName + " " + userInfo.user.lastName
              : "Guest"}
          </p>
        </li>
        <li>
          <p className="title">Email:</p>
          <p className="description">
            {authUser != null ? userInfo.user.email : "Guest"}
          </p>
        </li>
        <li>
          <p className="title">Degree Program</p>
          <p className="description">
            {authUser != null ? userInfo.degreeProgram.programName : "Guest"}
          </p>
        </li>
      </ul>
      <div className="separator" />
    </section>
  );
};

export default StudentInfo;
