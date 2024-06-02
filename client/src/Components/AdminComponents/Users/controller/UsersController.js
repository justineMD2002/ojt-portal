import React, { useEffect, useState } from "react";
import { useAuth } from "../../../UserManagement/AuthContext";
import { getAllUsers, userData } from "../model/UsersModel";
import axios from "axios";
import qs from "qs";
import UsersView from "../view/UsersView";

const UsersController = () => {
  const { authUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState(userData);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers(authUser.accessToken);
        setUsers(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUsers();
  }, [authUser.accessToken]);

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

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = async () => {
    let apiEndpoint;
    switch (userType) {
      case "student":
        apiEndpoint = "https://ojt-backend.azurewebsites.net/student/register";
        break;
      case "admin":
        apiEndpoint =
          "https://ojt-backend.azurewebsites.net/auth/register-admin";
        break;
      case "instructor":
        apiEndpoint =
          "https://ojt-backend.azurewebsites.net/auth/register-instructor";
        break;
      case "chair":
        apiEndpoint =
          "https://ojt-backend.azurewebsites.net/auth/register-chair";
        break;
      default:
        return;
    }

    try {
      const response = await axios.post(apiEndpoint, qs.stringify(formData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      window.location.reload();
      setShowModal(false);
      alert("Registration successful");
    } catch (error) {
      console.error("Error:", error);
      setShowModal(false);
      alert("Registration failed");
    }
  };

  const renderFormFields = () => {
    switch (userType) {
      case "student":
        return (
          <>
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
          </>
        );
      default:
        return null;
    }
  };

  return (
    <UsersView
      handleClickCreateUser={handleClickCreateUser}
      users={users}
      showModal={showModal}
      handleCloseModal={handleCloseModal}
      handleSubmit={handleSubmit}
      userType={userType}
      handleUserTypeChange={handleUserTypeChange}
      formData={formData}
      handleInputChange={handleInputChange}
      renderFormFields={renderFormFields}
    />
  );
};

export default UsersController;
