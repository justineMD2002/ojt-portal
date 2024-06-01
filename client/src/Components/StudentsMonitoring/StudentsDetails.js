import React, { useEffect, useState } from 'react';
import { useAuth } from '../UserManagement/AuthContext';
import axios from 'axios';

const StudentDetails = () => {
  const { authUser } = useAuth();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "https://ojt-backend.azurewebsites.net/get-all-students",
          {
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );

        let filteredStudents = response.data.filter(student => {
          const degreeProgramRegex = /(Computer Science|Information Technology)/i;
          return degreeProgramRegex.test(student.degreeProgram);
        });

        if (authUser.email === "chair@cit.edu") {
          filteredStudents = filteredStudents.filter(student => student.user.userStatus === "Active");
        }

        setStudents(filteredStudents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchStudents();
  }, [authUser])

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

export default StudentDetails;
