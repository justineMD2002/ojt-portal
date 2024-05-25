// controllers/LoginSignupController.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { useAuth } from "../AuthContext";
import LoginSignupView from "../views/LoginSignupView";
import {
  initialUserState,
  initialStudentState,
  initialSupervisorState,
} from "../models/UserModels";

const LoginSignupController = () => {
  const [signIn, toggle] = useState(true);
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);
  const { setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const [user, setUser] = useState(initialUserState);
  const [student, setStudent] = useState(initialStudentState);
  const [supervisor, setSupervisor] = useState(initialSupervisorState);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ojt-portal-backend2.azurewebsites.net/auth/login",
        qs.stringify(user),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data.accessToken) {
        setIsLoggedIn(true);
        setAuthUser(response.data);
        if (response.data.accountType === "ROLE_STUDENT") {
          navigate("/student-info");
        } else {
          navigate("/task-monitoring");
        }
      } else if (response.data !== "ERROR: User does not exist") {
        navigate("/activate-account", {
          state: { email: user.email },
        });
      } else {
        setIsLoggedIn(false);
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignupStudent = async (e) => {
    e.preventDefault();
    try {
      console.log("Student info:", student);
      const response = await axios.post(
        "https://ojt-portal-backend2.azurewebsites.net/student/register",
        qs.stringify(student),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data === 1) {
        alert("Registration Successful. Please log in.");
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignupSupervisor = async (e) => {
    e.preventDefault();
    try {
      console.log("Supervisor info:", supervisor);
      const response = await axios.post(
        "https://ojt-portal-backend2.azurewebsites.net/supervisor/register",
        qs.stringify(supervisor),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data === 1) {
        alert("Registration Successful. Please log in.");
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getSignupHandler = () => {
    switch (userType) {
      case "Student":
        return handleSignupStudent;
      case "Supervisor":
        return handleSignupSupervisor;
      default:
        return (e) => {
          e.preventDefault();
          console.log("Please select a user type.");
        };
    }
  };

  return (
    <LoginSignupView
      signIn={signIn}
      toggle={toggle}
      userType={userType}
      setUserType={setUserType}
      user={user}
      handleChange={handleChange}
      handleLogin={handleLogin}
      handleSignup={getSignupHandler()}
      isLoggedIn={isLoggedIn}
      student={student}
      setStudent={setStudent}
      supervisor={supervisor}
      setSupervisor={setSupervisor}
    />
  );
};

export default LoginSignupController;
