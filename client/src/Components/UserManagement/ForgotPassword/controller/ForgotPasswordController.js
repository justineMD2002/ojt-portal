import React, { useState } from "react";
import axios from "axios";
import { ForgotPasswordModel } from "../model/ForgotPasswordModel";
import ForgotPasswordView from "../view/ForgotPasswordView";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";

const ForgotPasswordController = () => {
  const { state } = useLocation();
  const [email] = useState(state.email);
  const [forgotPassword, setForgotPassword] = useState(ForgotPasswordModel);
  const [matchPassword, setMatchPassword] = useState(true);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForgotPassword({ ...forgotPassword, [e.target.name]: e.target.value });
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://ojt-backend.azurewebsites.net/auth/forget-password/verify",
        qs.stringify({
          email: email,
          password: forgotPassword.password,
          otp: forgotPassword.otp,
        })
      );

      if (response.data === 1) {
        alert("Password reset successfully");
        navigate("/");
      } else {
        setHasError(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ForgotPasswordView
      handleChange={handleChange}
      forgotPassword={forgotPassword}
      hasError={hasError}
      matchPassword={matchPassword}
      resetPassword={resetPassword}
      setMatchPassword={setMatchPassword}
    />
  );
};

export default ForgotPasswordController;
