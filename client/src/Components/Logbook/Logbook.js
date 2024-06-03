import React from "react";
import StudentInfo from "./StudentInfo";

const Logbook = () => {
  // holds the components for the Logbook
  return (
    <div className="Logbook">
      {/* student info */}
      <h1>Submitted Logbooks</h1>
      <StudentInfo />
      
    </div>
  );
};

export default Logbook;
