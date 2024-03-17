import React from "react";

const StudentInfo = () => {
  return (
    <section className="student-info-wrapper">
      <h3>Student Information</h3>
      <ul className="student-info">
        <li>
          <p className="title">Student Name:</p>
          <p className="description">John Doe</p>
        </li>
        <li>
          <p className="title">Student ID:</p>
          <p className="description">2012t4235</p>
        </li>
        <li>
          <p className="title">Program/Course Name</p>
          <p className="description">Computer Science</p>
        </li>
        <li>
          <p className="title">Supervisor Name:</p>
          <p className="description">John Doe</p>
        </li>
      </ul>
      <div className="separator" />
    </section>
  );
};

export default StudentInfo;
