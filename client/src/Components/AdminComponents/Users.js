import React, { useEffect, useState } from 'react';
import { useAuth } from '../UserManagement/AuthContext';
import axios from 'axios';

const Users = () => {
  const { authUser } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "https://ojt-backend.azurewebsites.net/user/get/all",
          {
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );

        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchStudents();
  }, [authUser])

  return (
    <div>
      <h1>Users List</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Account Type</th> {/* Assuming you want to display account type */}
            <th>User Status</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td>{user.uid}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.accountType}</td>
              <td>{user.userStatus}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;