import React from "react";

const StudentInfo = ({ authUser }) => {
  return (
    <section className="student-info-wrapper">
      <h3>Student Information</h3>
      <ul className="student-info">
        <li>
          <p className="title">Student ID:</p>
          <p className="description">
            {authUser != null ? authUser.userInfo.studentID : "Guest"}
          </p>
        </li>
        <li>
          <p className="title">Student Name:</p>
          <p className="description">
            {authUser != null
              ? authUser.userInfo.firstname + " " + authUser.userInfo.lastname
              : "Guest"}
          </p>
        </li>
        <li>
          <p className="title">Email:</p>
          <p className="description">
            {authUser != null ? authUser.userInfo.email : "Guest"}
          </p>
        </li>
        <li>
          <p className="title">Degree Program</p>
          <p className="description">
            {authUser != null ? authUser.userInfo.degreeProgram : "Guest"}
          </p>
        </li>
      </ul>
      <div className="separator" />
    </section>
  );
};

export default StudentInfo;
