import React, { useState } from "react";
import OjtTRacking from "./OjtTracking";
import StudentInfo from "./StudentInfo";
import ProgressOverview from "./ProgressOverview";
import { useAuth } from "../UserManagement/AuthContext";
import JoinOJTTeamModal from "./JoinOJTTeamModal";

const Dashboard = () => {
  const { authUser, handleLogout } = useAuth();
  const [isOfficialIntern, setIsOfficialIntern] = useState(
    authUser.ojtRecord.status !== null &&
      authUser.ojtRecord.status === "ONGOING"
  );

  return (
    <div className="Dashboard">
      {console.log("isOfficialIntern: ", isOfficialIntern)}
      {!isOfficialIntern && (
        <JoinOJTTeamModal
          handleLogout={handleLogout}
          accessToken={authUser.accessToken}
          setIsOfficialIntern={setIsOfficialIntern}
        />
      )}
      {/* student info */}
      <StudentInfo authUser={authUser} />
      {/* ojt tracking */}
      <OjtTRacking />
      {/* progress overview */}
      <ProgressOverview />
    </div>
  );
};

export default Dashboard;
