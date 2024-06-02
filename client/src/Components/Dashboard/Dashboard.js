import React, { useState } from "react";
import StudentInfo from "./StudentInfo/StudentInfo";
import { useAuth } from "../UserManagement/AuthContext";
import JoinOJTTeamModalController from "./JoinOJTModal/controller/JoinOJTModalController";
import ProgressOverviewController from "./ProgressOverview/controller/ProgressOverviewController";
import OJTTrackingController from "./OJTTracking/controller/OJTTrackingController";

const Dashboard = () => {
  const { authUser, handleLogout } = useAuth();
  const [isOfficialIntern, setIsOfficialIntern] = useState(
    authUser.ojtRecord.status !== null &&
      authUser.ojtRecord.status === "ONGOING"
  );

  return (
    <div className="Dashboard">
      {console.log("isOfficialIntern: ", isOfficialIntern)}
      {console.log(authUser)}
      {!isOfficialIntern && (
        <JoinOJTTeamModalController
          handleLogout={handleLogout}
          accessToken={authUser.accessToken}
          setIsOfficialIntern={setIsOfficialIntern}
        />
      )}
      {/* student info */}
      <StudentInfo authUser={authUser} />
      {/* ojt tracking */}
      <OJTTrackingController authUser={authUser} />
      {/* progress overview */}
      <ProgressOverviewController authUser={authUser} />
    </div>
  );
};

export default Dashboard;
