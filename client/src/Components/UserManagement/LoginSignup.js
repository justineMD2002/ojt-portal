import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Components from "./Components";
import {Admin, Student, Supervisor } from "./Details";
import { DropdownUserType } from "./Dropdown";
import axios from 'axios';
import qs from 'qs';
import { useAuth } from "./AuthContext";

export function LoginSignup() {
  const [signIn, toggle] = useState(true);
  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);
  const {authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,} = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [student, setStudent] = useState({
    studentID: "",
    firstname: "",
    lastname: "",
    department: "", 
    email: "",
    password: ""
  });
  const [supervisor, setSupervisor] = useState({
    firstname: "",
    lastname: "",
    company_name: "",
    company_email: "",
    company_contactNo: "",
    company_location: "",
    position: "",
    password: ""
  });
  const [admin, setAdmin] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://ojt-portal-backend2.azurewebsites.net/auth/login',
        qs.stringify(user), 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      );
      console.log("Login Response:", response.data);
      if (response.data.accessToken) {
        setIsLoggedIn(true);
        setAuthUser(response.data.userInfo);
        navigate("/student-info");
      } else {
        setIsLoggedIn(false);
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };  

  const handleSignupStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://ojt-portal-backend2.azurewebsites.net/student/register',
        qs.stringify(student), 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      );
      if (response.data === 1) {
        console.log('Registration successful');
        navigate("/student-info");
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignupAdmin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://ojt-portal-backend2.azurewebsites.net/auth/admin-register',
        qs.stringify(admin), 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      );
      if (response.data === 1) {
        console.log('Registration successful');
        navigate("/student-info");
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignupSupervisor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://ojt-portal-backend2.azurewebsites.net/supervisor/register',
        qs.stringify(supervisor), 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      );
      if (response.data === 1) {
        console.log('Registration successful');
        navigate("/student-info");
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getSignupHandler = () => {
    switch (userType) {
      case 'Student':
        return handleSignupStudent;
      case 'Admin':
        return handleSignupAdmin;
      case 'Supervisor':
        return handleSignupSupervisor;
      default:
        return (e) => {
          e.preventDefault();
          console.log('Please select a user type.');
        };
    }
  };

  return (
    <div className="login-signup-wrapper">
      <Components.Container>
        <Components.SignUpContainer signingIn={signIn}>
          <Components.Form onSubmit={getSignupHandler()}>
            <Components.Title>Create Account</Components.Title>
            {!userType && <DropdownUserType setUserType={setUserType}/>}
            <div className="content">
              {userType === "Student" && <Student student={student} setStudent={setStudent}/> }
              {userType === "Supervisor" && <Supervisor supervisor={supervisor} setSupervisor={setSupervisor}/> }
              {userType === "Admin" && <Admin  admin={admin} setAdmin={setAdmin}/> }
            </div>
            <Components.Button type="submit">Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        <Components.SignInContainer signingIn={signIn}>
          <Components.Form onSubmit={handleLogin}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input name="email" type="email" placeholder="Email" onChange={handleChange}/>
            <Components.Input name="password" type="password" placeholder="Password" onChange={handleChange}/>
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            {isLoggedIn != null && (
              <p style={{ color: 'red' }}>Login failed. Please check your credentials.</p>
            )}
            <Components.Button type="submit">Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
        <Components.OverlayContainer signingIn={signIn}>
          <Components.Overlay signingIn={signIn}>
            <Components.LeftOverlayPanel signingIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>
            <Components.RightOverlayPanel signingIn={signIn}>
              <Components.Title>Hello, Trainee!</Components.Title>
              <Components.Paragraph>
                Enter your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

