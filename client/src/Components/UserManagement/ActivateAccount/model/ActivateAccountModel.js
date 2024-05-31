import { useLocation } from "react-router-dom";

export const ActivateAccountModel = () => {
  const { state } = useLocation();
  const ActivateAccountModel = {
    email: state.email,
    activationCode: "",
  };

  return ActivateAccountModel;
};
