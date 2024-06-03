import React from "react";
import SubmittedInfoController from "./SubmittedInfo/controller/SubmittedInfoController";

const SubmittedLogbooks = () => {
  // holds the components for the Logbook
  return (
    <div className="SubmittedLogbooks">
      {/* student info */}
      <h1>Submitted Logbooks</h1>
      <SubmittedInfoController />
      
    </div>
  );
};

export default SubmittedLogbooks;
