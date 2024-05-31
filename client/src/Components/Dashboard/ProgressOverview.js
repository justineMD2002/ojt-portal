import React, { useState, useEffect } from "react";
import CircularProgress from "./CircularProgress";
import { useAuth } from "../UserManagement/AuthContext";
import axios from "axios";

const ProgressOverview = () => {
  const { authUser } = useAuth();
  const [approvalPercentage, setApprovalPercentage] = useState(0);
  const [pendingPercentage, setPendingPercentage] = useState(0);
  useEffect(() => {
    const getLogbookCount = async () => {
      if (authUser && authUser.accessToken && authUser.ojtRecord) {
        try {
          const response = await axios.get(
            "https://ojt-backend.azurewebsites.net/student/get-all-entries",
            {
              params: {
                email: authUser.userInfo.email,
              },
              headers: {
                Authorization: `Bearer ${authUser.accessToken}`,
              },
            }
          );
          const approvedCount = response.data.reduce((count, entry) => {
            return entry.status === "APPROVED" ? count + 1 : count;
          }, 0);
          const pendingCount = response.data.reduce((count, entry) => {
            return entry.status === "PENDING" ? count + 1 : count;
          }, 0);
          const totalEntries = response.data.length;
          const percentage = Math.ceil((approvedCount / totalEntries) * 100);
          const pPercentage = Math.ceil((pendingCount / totalEntries) * 100);
          setApprovalPercentage(percentage);
          setPendingPercentage(pPercentage);
        } catch (error) {
          console.error("Error fetching logbook:", error);
        }
      }
    };
    getLogbookCount();
  }, [authUser]);

  return (
    <section className="ProgressOverview">
      <h3>Progress Overview</h3>
      <div className="progress-wrapper">
        <div className="progress-container">
          {authUser && authUser.ojtRecord && (
            <CircularProgress
              percentage={Math.ceil(
                (authUser.ojtRecord.renderedHrs / authUser.ojtRecord.ojtHours) *
                  100
              )}
            />
          )}
          <p className="description">OJT Hours</p>
        </div>
        <div className="progress-container">
          <CircularProgress percentage={pendingPercentage} />
          <p className="description">Pending Logbook Entries</p>
        </div>
        <div className="progress-container">
          <CircularProgress percentage={approvalPercentage} />
          <p className="description">Approved Logbook Entries</p>
        </div>
      </div>
    </section>
  );
};

export default ProgressOverview;
