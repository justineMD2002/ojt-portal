import React, { useState } from "react";
import { useAuth } from "../../UserManagement/AuthContext";
import InternMonitoringView from "../views/InternMonitoringView";

const InternMonitoringController = () => {
  const { authUser } = useAuth();
  const [openModal, setOpenModal] = React.useState(false);
  const [accessToken] = useState(authUser.accessToken);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <InternMonitoringView
      openModal={openModal}
      handleOpenModal={handleOpenModal}
      accessToken={accessToken}
    />
  );
};

export default InternMonitoringController;
