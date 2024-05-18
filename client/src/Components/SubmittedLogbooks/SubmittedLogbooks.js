import React from "react";
import StudentInfo from "./SubmittedInfo";

const SubmittedLogbooks = () => {
  // holds the components for the Logbook
  return (
    <div className="SubmittedLogbooks">
      {/* student info */}
      <h1>Submitted Logbooks</h1>
      <StudentInfo />
      
    </div>
  );
};

export default SubmittedLogbooks;
