import React from "react";
import SubmittedInfo from "./SubmittedInfo";

const SubmittedLogbooks = () => {
  // holds the components for the Logbook
  return (
    <div className="SubmittedLogbooks">
      {/* student info */}
      <h1>Submitted Logbooks</h1>
      <SubmittedInfo />
      
    </div>
  );
};

export default SubmittedLogbooks;
