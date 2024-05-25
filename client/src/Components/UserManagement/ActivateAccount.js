import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import axios from "axios";

const ActivateAccount = () => {
  const { state } = useLocation();
  const [email] = useState(state.email);
  const [activationCode, setActivationCode] = useState("");
  const navigate = useNavigate();

  const handleActivationCodeChange = (e) => {
    setActivationCode(e.target.value);
  };

  const activateAccount = async (e) => {
    console.log({
      email: email,
      verificationCode: activationCode,
    });
    e.preventDefault();
    try {
      console.log("email:", email, "activationCode:", activationCode);
      const response = await axios.put(
        "https://ojt-portal-backend2.azurewebsites.net/auth/activate",
        qs.stringify({
          email: email,
          verificationCode: activationCode,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("respo:", response.data);

      if (response.data === 1) {
        alert("Account activated successfully. Redirecting to login page.");
        navigate("/");
      } else {
        alert("Account activation failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <label>
        Activation Code:
        <input
          type="text"
          onChange={handleActivationCodeChange}
          value={activationCode}
        />
      </label>
      <button type="submit" onClick={activateAccount}>
        Activate Account
      </button>
    </form>
  );
};

export default ActivateAccount;
