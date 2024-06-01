import React, { useState } from "react";
import ForgotPasswordEmailModalView from "../view/ForgotPasswordEmailModalView";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const ForgotPasswordEmailModalController = ({ handleOpenModal }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmailConfirmation = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://ojt-backend.azurewebsites.net/auth/forget-password",
        qs.stringify({ email: email })
      );

      console.log("response:", response.data);
      console.log(email);
      if (response.data === 1) {
        alert("Email sent successfully");
        navigate("/forgot-password", {
          state: { email: email },
        });
      } else {
        alert("There was an error sending the email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ForgotPasswordEmailModalView
      handleOpenModal={handleOpenModal}
      handleChange={handleChange}
      sendEmailConfirmation={sendEmailConfirmation}
      email={email}
    />
  );
};

export default ForgotPasswordEmailModalController;
