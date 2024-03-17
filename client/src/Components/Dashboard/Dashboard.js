import React from "react";
import OjtTRacking from "./OjtTracking";
import StudentInfo from "./StudentInfo";
import ProgressOverview from "./ProgressOverview";

const Dashboard = () => {
  // holds the components for the dashboard
  return (
    <div className="Dashboard">
      {/* student info */}
      <StudentInfo />
      {/* ojt tracking */}
      <OjtTRacking />
      {/* progress overview */}
      <ProgressOverview />
    </div>
  );
};

export default Dashboard;
