import React, { useState } from "react";
import { ActivateAccountModel } from "../model/ActivateAccountModel";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import ActivateAccountView from "../view/ActivateAccountView";

const ActivateAccountController = () => {
  const activateAccountModel = ActivateAccountModel();
  const [email] = useState(activateAccountModel.email);
  const [activationCode, setActivationCode] = useState(
    activateAccountModel.activationCode
  );
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const handleActivationCodeChange = (e) => {
    setActivationCode(e.target.value);
  };

  const activateAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://ojt-backend.azurewebsites.net/auth/activate",
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
        setHasError(false);
        alert("Account activated successfully. Redirecting to login page.");
        navigate("/");
      } else {
        setHasError(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ActivateAccountView
      activationCode={activationCode}
      handleActivationCodeChange={handleActivationCodeChange}
      activateAccount={activateAccount}
      hasError={hasError}
    />
  );
};

export default ActivateAccountController;
