import React from "react";

const StudentsDetailsView = ({ students }) => {
  return (
    <div>
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Degree Program</th>
            <th>User Status</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentid}>
              <td>{student.studentid}</td>
              <td>{student.user.firstname}</td>
              <td>{student.user.lastname}</td>
              <td>{student.degreeProgram}</td>
              <td>{student.user.userStatus}</td>
              <td>{student.user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsDetailsView;
