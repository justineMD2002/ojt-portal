import React from "react";
import InternDesignationController from "../controllers/InternDesignationController";

const InternMonitoringView = ({openModal, handleOpenModal, accessToken}) => {
  return (
    <div>
      <h2>Interns</h2>
      <button onClick={handleOpenModal}>Invite an Intern</button>

      {openModal && <InternDesignationController handleOpenModal={handleOpenModal} accessToken={accessToken}/>}
    </div>
  );
};

export default InternMonitoringView;
