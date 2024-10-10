import React, { useEffect, useState } from "react";
import StudentInfo from "./StudentInfo/StudentInfo";
import { useAuth } from "../UserManagement/AuthContext";
import JoinOJTTeamModalController from "./JoinOJTModal/controller/JoinOJTModalController";
import ProgressOverviewController from "./ProgressOverview/controller/ProgressOverviewController";
import OJTTrackingController from "./OJTTracking/controller/OJTTrackingController";

const Dashboard = () => {
  const { authUser, handleLogout, userInfo } = useAuth();
  const [isOfficialIntern, setIsOfficialIntern] = useState(true);

  useEffect(() => {
    if (!userInfo.internshipStatus || userInfo.internshipStatus === "Pending") {
      setIsOfficialIntern(false);
    } else {
      setIsOfficialIntern(true);
    }
  }, [authUser.ojtRecord]);

  return (
    <div className="Dashboard">
      {!isOfficialIntern && (
        <JoinOJTTeamModalController
          handleLogout={handleLogout}
          accessToken={authUser.accessToken}
          setIsOfficialIntern={setIsOfficialIntern}
        />
      )}
      {/* student info */}
      <StudentInfo authUser={authUser} userInfo={userInfo} />
      {/* ojt tracking */}
      <OJTTrackingController authUser={authUser} />
      {/* progress overview */}
      <ProgressOverviewController authUser={authUser} />
    </div>
  );
};

export default Dashboard;
