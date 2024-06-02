import React, { useEffect, useState } from "react";
import StudentInfo from "./StudentInfo/StudentInfo";
import { useAuth } from "../UserManagement/AuthContext";
import JoinOJTTeamModalController from "./JoinOJTModal/controller/JoinOJTModalController";
import ProgressOverviewController from "./ProgressOverview/controller/ProgressOverviewController";
import OJTTrackingController from "./OJTTracking/controller/OJTTrackingController";
import axios from "axios";

const Dashboard = () => {
  const { authUser, handleLogout } = useAuth();
  const [isOfficialIntern, setIsOfficialIntern] = useState(true);

  const getOJTRecord = async () => {
    try {
      const response = await axios.get(
        "https://ojt-backend.azurewebsites.net/get-ojt-records",

        {
          params: {
            studentEmail: authUser.userInfo.email,
          },
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );

      console.log(response.data[0].status);
      if (response.data[0].status === "PENDING") {
        setIsOfficialIntern(false);
      } else {
        setIsOfficialIntern(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOJTRecord();
  }, []);

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
      <StudentInfo authUser={authUser} />
      {/* ojt tracking */}
      <OJTTrackingController authUser={authUser} />
      {/* progress overview */}
      <ProgressOverviewController authUser={authUser} />
    </div>
  );
};

export default Dashboard;
