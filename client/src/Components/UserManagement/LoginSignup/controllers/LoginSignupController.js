import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { useAuth } from "../../AuthContext";
import LoginSignupView from "../views/LoginSignupView";
import { UserLoginModel } from "../models/UserLoginModel";
import { StudentModel } from "../models/StudentModel";
import { SupervisorModel } from "../models/SupervisorModel";

const LoginSignupController = () => {
  const [signIn, toggle] = useState(true);
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);
  const { isLoggedIn, setIsLoggedIn, setAuthUser } = useAuth();
  const [user, setUser] = useState(UserLoginModel);
  const [student, setStudent] = useState(StudentModel);
  const [supervisor, setSupervisor] = useState(SupervisorModel);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("userinfo:", user);
    console.log("herelogin");
    try {
      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/auth/login",
        qs.stringify(user),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("response:", response.data);
      if (response.data.accessToken) {
        console.log("here1login");
        setIsLoggedIn(true);
        setAuthUser(response.data);
        if (response.data.accountType === "ROLE_STUDENT") {
          navigate("/student-info");
        } else {
          navigate("/intern-monitoring");
        }
      } else if (
        response.data ===
        "ERROR: Account is still pending verification. Check email for the account activation code."
      ) {
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
      const response = await axios.post(
        "https://ojt-backend.azurewebsites.net/student/register",
        qs.stringify(student),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log(response.data);
      if (response.data === 1) {
        setUser({ email: student.email, password: student.password });
      } else {
        alert("Registration failed");
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
        "https://ojt-backend.azurewebsites.net/supervisor/register",
        qs.stringify(supervisor),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data === 1) {
        setUser({ email: supervisor.email, password: supervisor.password });
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
