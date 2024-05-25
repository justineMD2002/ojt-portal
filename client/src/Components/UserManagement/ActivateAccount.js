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
    e.preventDefault();
    try {
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
    <div className="activate-account">
      <h1>Activate Account</h1>
      <p>
        An activation code has been sent to your email. Please enter the
        activation code below. If you did not receive the email, please check
        your spam folder.
      </p>
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
    </div>
  );
};

export default ActivateAccount;
