import React, { useMemo } from "react";
import ActivateAccountView from "../view/ActivateAccountView";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useGlobalState } from "../../../Helpers/Globals/variables";

const ActivateAccountController = () => {
  const { setIsLoading, setError, apiBaseUrl } = useGlobalState();
  const location = useLocation();
  const { email } = location.state || {};  

  const handleResendActivationEmail = async() => {
      setIsLoading(true);
      try {
        await axios.get(`${apiBaseUrl}/users/resend/activation?email=${email}`)
      } catch(error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
  }

  return <ActivateAccountView handleResendActivationEmail={handleResendActivationEmail}/>;
};

export default ActivateAccountController;
