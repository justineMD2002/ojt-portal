import React, { useEffect, useState } from 'react';
import { useAuth } from '../UserManagement/AuthContext';
import axios from 'axios';
import ReusableForm from './ReusableForm'; 
import qs from "qs";

const Users = () => {
  const { authUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    studentID: '',
    firstname: '',
    lastname: '',
    degreeProgram: '',
    email: '',
    password: '',
  });

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
  }, [users]);

  const handleClickCreateUser = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {

    console.log(formData)

    try {
      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/student/register",
        qs.stringify(formData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setShowModal(false);
      alert("Registration goods");
    } catch (error) {
      console.error("Error:", error);
      setShowModal(false);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h1>Users List</h1>
      <button onClick={handleClickCreateUser}>Create User</button>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Account Type</th>
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

      <ReusableForm
        show={showModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        transactionType="Create New User"
      >
        <div>
          <label htmlFor="studentID">Student ID:</label>
          <input
            type="text"
            id="studentID"
            name="studentID"
            value={formData.studentID}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="degreeProgram">Degree Program:</label>
          <input
            type="text"
            id="degreeProgram"
            name="degreeProgram"
            value={formData.degreeProgram}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
      </ReusableForm>
    </div>
  );
};

export default Users;
